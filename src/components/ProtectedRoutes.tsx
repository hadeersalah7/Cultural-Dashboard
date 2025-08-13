import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate } from "react-router-dom";


interface IProps {
    children: React.ReactNode;
}
const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
    const { token } = useSelector((state: RootState) => state.loginUser)
    const loginToken = localStorage.getItem("token")

    if (!token && !loginToken) {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = "/login"
    }
    return (
        <div>{children}</div>
    )
}

export default ProtectedRoutes