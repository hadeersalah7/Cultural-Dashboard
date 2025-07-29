import loginImage from "../assets/login-home-image.jpg";
import LoginForm from "../components/LoginForm";
import RightLoginContent from "../components/RightLoginContent";
const Login = () => {
    return (
        <main className="flex justify-between min-h-screen w-full max-w-[1920px]">
            <div className="left w-[50%] flex items-center">
                <LoginForm />
            </div>
            <section
                className="right w-[50%] bg-no-repeat bg-position-[50%] bg-cover relative flex items-center max-[700px]:hidden"
                style={{ backgroundImage: `url(${loginImage})` }}
            >
                <RightLoginContent />
            </section>
        </main>
    );
};

export default Login;
