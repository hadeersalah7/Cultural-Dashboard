import { DatePicker, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { toast } from "react-toastify";
import axios from "axios";
import type { IEvent } from "../redux-features/user/types";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid"

interface IProps {
    open: boolean;
    onCancel: () => void;
    initialValue: IEvent | null;
    editMode: boolean
}

const AddEventModal: React.FC<IProps> = ({ open, onCancel, initialValue, editMode }) => {
    const { isDark } = useContext(DashboardContext);
    const [eventName, setEventName] = useState<string>("");
    const [dateTime, setDateTime] = useState<any | null>(null)

    useEffect(() => {
        if (open) {
            if (editMode) {
            setEventName(initialValue?.name || "")
            setDateTime(initialValue?.date ? dayjs(initialValue.date) : null)
            }
            console.log("initial Value: ", initialValue)
        }
    }, [open, initialValue, editMode])

    const handleCancel = () => {
        onCancel();
    };
    const handleSubmit = async () => {
        try {
            if (initialValue) {
                await axios.put("/api/updateEvent", {
                    id: initialValue.id,
                    name: eventName,
                    date: dateTime.format("YYYY-MM-DD")
                })
            } else {
                await axios.post("/api/createEvent", {
                    id: uuidv4(),
                    name: eventName,
                    date: dateTime.format("YYYY-MM-DD")
                })
            }
            onCancel()
        } catch (error) {
            toast.error("Failed to create event")
        }
    }
    return (
        <Modal
            open={open}
            key={editMode ? initialValue?.id : "new"}
            onCancel={handleCancel}
            onOk={handleSubmit}
            title={ editMode ? "Edit Event": "Add Event"}
            className={`${isDark ? "dark-modal" : ""} `}
            okButtonProps={{
                style: {
                    background: isDark
                        ? "linear-gradient(195deg, #1e3a8a 0%, #6b21a8 100%)"
                        : "linear-gradient(195deg, #2183e8 0%, #8a2cf6 100%)",
                    border: "none",
                    color: "white",
                },
            }}
            cancelButtonProps={{
                style: {
                    background: isDark
                        ? "linear-gradient(195deg, #4c1d95 0%, #6b21a8 100%)"
                        : "linear-gradient(195deg, #e0e0e0 0%, #f5f5f5 100%)",
                    border: "none",
                    color: isDark ? "white" : "black",
                },
            }}
        >
            <Form layout="vertical">
                <FormItem name="eventName" label="Event Name">
                    <Input
                        name="description"
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Event Name"
                    />
                </FormItem>

                <FormItem name="eventDate" label="Event Date">
                    <DatePicker
                        className="min-[260px]:w-full"
                        getPopupContainer={(trigger) =>
                            trigger.parentElement || document.body
                        }
                        value={dateTime}
                        onChange={(value) => setDateTime(value)}
                        format="YYYY-MM-DD"
                    />
                </FormItem>
            </Form>
        </Modal>
    );
};

export default AddEventModal;
