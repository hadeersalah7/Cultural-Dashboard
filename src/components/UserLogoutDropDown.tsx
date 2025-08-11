import { useState } from 'react'
import type { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { logoutUser } from '../redux-features/login/loginUserSlice';

const UserLogoutDropDown = () => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="relative flex items-center gap-1 ">
            <div
                onClick={() => setShowDropDown((prev) => !prev)}
                className="active-user w-9 h-9 rounded-[50%]  bg-[#8a2cf6] flex justify-center items-center cursor-pointer"
            >
                <AiOutlineUser className="text-[20px] text-white" />
            </div>
            <span className="text-gray-500 underline decoration-solid dark:text-white">Hi There!</span>
            {showDropDown && (
                <div className="user-dropdown w-35 absolute top-11 right-6 bg-slate-100 shadow-md rounded-md p-2 z-10">
                    <button
                        className="text-red-500 hover:text-red-700 font-medium cursor-pointer pl-2"
                        onClick={() => dispatch(logoutUser())}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserLogoutDropDown