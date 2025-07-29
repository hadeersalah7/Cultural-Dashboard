import { useEffect } from "react"
import loginLogo from "../assets/login logo.png"
const LoginForm = () => {
    useEffect(() => {
        const focusedEle = document.querySelector("#email") as HTMLInputElement
        if (focusedEle !== document.activeElement) {
            focusedEle?.focus()
        }
    }, [])
    return (
        <div className="form-wrapper w-full max-w-[490px] pl-15 relative">
            <div className="w-[150px] mb-15 absolute -top-28 left-1/2 transform -translate-y-1/2">
                <img src={loginLogo} alt="logo"/>
            </div>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="email" className="uppercase mt-12  text-gray-400 text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="johndoe@email.com"
                        className="w-full border-b mt-3 border-gray-300 bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none
                        focus:border-[#2183e8]
                        "
                    />
                </div>

                <div className="input-wrapper mt-6">
                    <label htmlFor="Password" className="uppercase text-gray-400 text-sm">Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        className="w-full border-b mt-3 border-gray-300 bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none
                        focus:border-[#2183e8] 
                        "
                        id="password"
                    />
                </div>

                <button type="submit" className="btn loginBtn flex mt-12 w-full
                text-white font-bold tracking-widest rounded-[40px] h-[50px] justify-center items-center">Login</button>
            </form>
        </div>
    )
}

export default LoginForm