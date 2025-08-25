import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { AddEventModal } from ".";
import axios from "axios";
import editIcon from "../assets/editIcon.png";
import type { IEvent } from "../redux-features/user/types";

const AddEvent = () => {
    const [openEventModal, setOpenEventModal] = useState<boolean>(false);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [editMode, setEditMode] = useState<boolean>(false);
    useEffect(() => {
        axios.get("/api/events").then((res) => setEvents(res.data.events));
    }, [openEventModal]);
    return (
        <>
            <div className="mt-10 bg-slate-100  dark:bg-[#28264f] px-5 rounded-lg h-15 py-4">
                {events.length === 0 ? (
                    <header className=" flex justify-between">
                        <h2 className="text-lg font-bold text-gray-500 dark:text-white">
                            There are currently no events, click add to add one
                        </h2>
                        <span
                            className="text-3xl cursor-pointer"
                            onClick={() => setOpenEventModal(true)}
                            title="Add Event"
                        >
                            <FcPlus />
                        </span>
                    </header>
                ) : (
                    <div className="flex justify-between">
                        {events.map((event, index) => (
                            <>
                                <div
                                    key={index}
                                    className="text-gray-500 dark:text-white flex justify-between"
                                >
                                    <p className="text-lg">
                                        <strong>{event.name}</strong> - {event.date}
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        <img
                                            src={editIcon}
                                            alt="edit-icon"
                                            className="w-[30px] cursor-pointer"
                                            title="Edit Event"
                                            onClick={() => {
                                                setOpenEventModal(true) 
                                                setEditMode(true)
                                            }}
                                        />
                                    </span>
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
            <AddEventModal
                open={openEventModal}
                onCancel={() => setOpenEventModal(false)}
            />
        </>
    );
};

export default AddEvent;
