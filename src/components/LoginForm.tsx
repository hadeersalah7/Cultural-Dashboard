import { useEffect, useState } from "react";
import loginLogo from "../assets/login logo.png";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import type { ILogin } from "../login/types";
import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../login/loginUserSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const LoginForm = () => {
    const {loading } = useSelector((state: RootState) => state.loginUser);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const focusedEle = document.getElementById("email");
        if (focusedEle !== document.activeElement) {
            focusedEle?.focus();
        }
    }, []);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({ resolver: yupResolver(validationSchema) });

    const email = watch("email");
    const password = watch("password");

    const onSubmit = async (data: ILogin) => {
        try {
            const token = await dispatch(loginUser(data));
        if (!token) {
            navigate("/login");
        } else {
            navigate("/");
        }
        } catch (error) {
            console.error(error)
            navigate("/login")
        }
    };
    return (
        <div className="form-wrapper w-full max-w-[490px] min-[800px]:px-6 relative max-[700px]:px-10">
            <div className="w-[150px] mb-15 absolute loginLogo -top-28 left-[35%] max-[700px]:left-[35%] transform -translate-y-1/2">
                <img src={loginLogo} alt="logo" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <label
                        htmlFor="email"
                        className="uppercase mt-12  text-gray-400 text-sm"
                    >
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder="johndoe@email.com"
                        className=" w-full border-b mt-3 border-gray-300 bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none
                        focus:border-[#2183e8]
                        "
                    />
                    <p className="pt-3 text-red-600">{errors.email?.message}</p>
                </div>

                <div className="input-wrapper mt-6">
                    <label htmlFor="Password" className="uppercase text-gray-400 text-sm">
                        Password
                    </label>
                    <input
                        {...register("password")}
                        type={showPass ? "text" : "password"}
                        placeholder="password"
                        className="w-full border-b mt-3 border-gray-300 bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none
                        focus:border-[#2183e8] 
                        "
                        id="password"
                    />
                    <span
                        onClick={() => setShowPass((prev) => !prev)}
                        className="text-gray-400 absolute right-7 top-[50%] transform -translate-y-1/8 cursor-pointer"
                    >
                        {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                    <p className="pt-3 text-red-600">{errors.password?.message}</p>
                </div>

                <button
                    type="submit"
                    className={`btn loginBtn flex mt-12 w-full
                text-white font-bold tracking-widest rounded-[40px] h-[50px] justify-center items-center cursor-pointer  transition-all duration-300`}
                    disabled={!email || !password || loading}
                >
                    {loading ? <span className="loading loading-ring loading-lg" /> : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
