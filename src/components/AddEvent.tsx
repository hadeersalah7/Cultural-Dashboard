import { useState } from "react"
import { FcPlus } from "react-icons/fc"
import { AddEventModal } from "."


const AddEvent = () => {
    const [openEventModal, setOpenEventModal] = useState<boolean>(false)
    return (
        <>
            <div className="mt-10 bg-slate-100  dark:bg-[#28264f] px-5 rounded-lg h-15 py-4">
                <header className=" flex justify-between">
                    <h2 className="text-lg font-bold text-gray-500 dark:text-white">There are currently no events, click add to add one</h2>
                    <span className="text-3xl cursor-pointer" onClick={() => setOpenEventModal(true)} title="Add Event"><FcPlus /></span>
                </header>
            </div>
            <AddEventModal
                open={openEventModal}
                onCancel={() => setOpenEventModal(false)}
            />
        </>
    )
}

export default AddEvent