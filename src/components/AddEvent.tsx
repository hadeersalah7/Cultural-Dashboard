import { useContext, useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { AddEventModal } from ".";
import axios from "axios";
import editIcon from "../assets/editIcon.png";
import removeIcon from "../assets/removeIcon.png";
import type { IEvent } from "../redux-features/user/types";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { EventContext } from "../contexts/EventsContext";
const AddEvent = () => {
    const { events, setEvents, fetchEvents } = useContext(EventContext)
    const [openEventModal, setOpenEventModal] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
    const [editMode, setEditMode] = useState<boolean>(false);
    useEffect(() => {
        axios.get("/api/events").then((res) => setEvents(res.data.events));
    }, [openEventModal]);

    const deleteEvent = async (id: string) => {
        try {
            const response = await axios.delete(`/api/deleteEvent/${id}`);
            if (response) {
                toast.success("Event Deleted Successfully");
            }
            fetchEvents();
        } catch (error) {
            toast.error("Failed To Delete Event!");
        }
    };
    return (
        <>
            <div className="mt-10">
                {events.length === 0 ? (
                    <div
                        className=" bg-slate-100  dark:bg-[#28264f] px-5 rounded-lg h-15 py-4"
                        key={uuidv4()}
                    >
                        <header className=" flex justify-between">
                            <h2 className="text-lg font-bold text-gray-500 dark:text-white">
                                There are currently no events, click add to add one!
                            </h2>
                            <span
                                className="text-3xl cursor-pointer"
                                onClick={() => {
                                    setOpenEventModal(true);
                                    setEditMode(false);
                                }}
                                title="Add Event"
                            >
                                <FcPlus />
                            </span>
                        </header>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {events.map((event) => (
                            <div
                                key={uuidv4()}
                                className="flex justify-between items-center bg-slate-100 dark:bg-[#28264f] px-5 py-4 h-15 rounded-lg"
                            >
                                <p className="text-xl">
                                    <strong>{event.name}</strong> - {event.date}
                                </p>

                                <div className="flex  gap-2">
                                    <span>
                                        <img
                                            src={editIcon}
                                            alt="edit-icon"
                                            className="w-[30px] cursor-pointer"
                                            title="Edit Event"
                                            onClick={() => {
                                                setSelectedEvent(event);
                                                setOpenEventModal(true);
                                                setEditMode(true);
                                            }}
                                        />
                                    </span>

                                    <span>
                                        <img
                                            src={removeIcon}
                                            alt="remove-icon"
                                            className="w-[30px] cursor-pointer"
                                            title="Remove Event"
                                            onClick={() => {
                                                deleteEvent(event.id);
                                                setSelectedEvent(null);
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {events.length > 0 ? (
                <aside className="fixed top-150 right-20">
                    <span
                        className="text-[70px] cursor-pointer"
                        onClick={() => {
                            setOpenEventModal(true);
                            setSelectedEvent(null);
                            setEditMode(false);
                        }}
                        title="Add Event"
                    >
                        <FcPlus />
                    </span>
                </aside>
            ) : null}

            <AddEventModal
                open={openEventModal}
                onCancel={() => setOpenEventModal(false)}
                initialValue={selectedEvent}
                editMode={editMode}
            />
        </>
    );
};

export default AddEvent;
