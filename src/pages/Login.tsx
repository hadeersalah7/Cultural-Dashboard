import loginImage from "../assets/login-home-image.jpg";
import LoginForm from "../components/LoginForm";
import RightLoginContent from "../components/RightLoginContent";
const Login = () => {
    return (
        <main className="flex justify-between min-h-screen w-full">
            <div className="left max-[750px]:w-full w-[50%] flex items-center justify-center">
                <LoginForm />
            </div>
            <section
                className="right w-[50%] bg-no-repeat bg-position-[50%] bg-cover relative flex items-center max-[800px]:hidden"
                style={{ backgroundImage: `url(${loginImage})` }}
            >
                <RightLoginContent />
            </section>
        </main>
    );
};

export default Login;
