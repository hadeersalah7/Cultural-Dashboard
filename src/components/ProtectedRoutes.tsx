import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate } from "react-router-dom";


interface IProps {
    children: React.ReactNode;
}
const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
    const { token } = useSelector((state: RootState) => state.loginUser)
    const loginToken = localStorage.getItem("token")
    console.log("Redux token:", useSelector((state: RootState) => state.loginUser.token));
    console.log("LocalStorage token:", localStorage.getItem("token"));

    if (!token && !loginToken) {
        return <Navigate to="login" replace />;
    }
    return (
        <div>{children}</div>
    )
}

export default ProtectedRoutes