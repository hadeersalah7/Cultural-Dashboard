import { useState } from 'react'
import type { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { logoutUser } from '../redux-features/user/userSlice';

const UserLogoutDropDown = () => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="relative flex items-center lg:gap-1 min-[285px]:pr-2">
            <div
                onClick={() => setShowDropDown((prev) => !prev)}
                className="active-user w-9 h-9 rounded-[50%]  bg-[#8a2cf6] flex justify-center dark:bg-[#b58cd7] items-center cursor-pointer"
            >
                <AiOutlineUser className="text-[20px] text-white" />
            </div>
            <span className="text-gray-500 underline decoration-solid dark:text-white md:block min-[100px]:hidden">Hi There!</span>
            {showDropDown && (
                <div className="user-dropdown w-35 absolute top-11 md:right-8 min-[285px]:-right-8 bg-slate-100 shadow-md rounded-md p-2 z-10">
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