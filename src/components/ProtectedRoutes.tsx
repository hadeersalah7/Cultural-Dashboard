import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { logoutUser } from "../redux-features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


interface IProps {
    children: React.ReactNode;
}
const ProtectedRoutes: React.FC<IProps> = ({ children }) => {
    const { token } = useSelector((state: RootState) => state.loginUser)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const loginToken = localStorage.getItem("token")

    useEffect(() => {
        if (!token && !loginToken) {
            dispatch(logoutUser())
            navigate("/login")
        }
    }, [token, loginToken])

    return (
        <div>{children}</div>
    )
}

export default ProtectedRoutes