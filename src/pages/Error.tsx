import { Link } from "react-router-dom"
import errorImage from "../assets/not-found.svg"

const Error = () => {
    return (
        <section className="grid place-items-center text-center">
            <img src={errorImage} alt="Page Not Found" className="w-1/2 my-12" />
            <h3 className="text-gray-700 text-xl dark:text-white capitalize">Sorry! We can't find the page that you're looking for.</h3>
            <Link to="/dashboard" className="py-10 underline">Go back to homepage!</Link>
        </section>
    )
}

export default Error