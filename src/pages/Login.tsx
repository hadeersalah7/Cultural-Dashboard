import loginImage from "../assets/login-home-image.jpg";
const Login = () => {
    return (
        <main className="flex justify-between min-h-screen w-full max-w-[1920px]">
            <div className="left w-[50%]">
                <h1>Heelllo</h1>
            </div>
            <section
                className="right w-[50%] bg-no-repeat bg-position-[50%] bg-cover relative flex items-center max-[700px]:hidden"
                style={{ backgroundImage: `url(${loginImage})` }}
            >
                
            </section>
        </main>
    );
};

export default Login;
