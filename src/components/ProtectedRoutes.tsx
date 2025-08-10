import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { Navigate } from "react-router-dom";


interface IProps {
    children: React.ReactNode;
}
const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
    const { token } = useSelector((state: RootState) => state.loginUser)
    if (!token) {
        localStorage.removeItem("token");
        return <Navigate to="/login" />
    }
    return (
        <div>{children}</div>
    )
}

export default ProtectedRoutes