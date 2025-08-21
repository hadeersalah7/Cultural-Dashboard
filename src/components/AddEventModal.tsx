import { DatePicker, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
// import { Input, FormItem } from "formik-antd";
import { useContext, useState } from "react";
import { DashboardContext } from "./DashboardContext";

interface IProps {
    open: boolean;
    onCancel: () => void;
}

const AddEventModal: React.FC<IProps> = ({ open, onCancel }) => {
    const { isDark } = useContext(DashboardContext);
    const [eventName, setEventName] = useState<string>("");
    const handleCancel = () => {
        onCancel();
    };
    return (
        <Modal
            open={open}
            onCancel={handleCancel}
            title="Add Event"
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
                    />
                </FormItem>

                <FormItem name="eventDate" label="Event Date">
                    <DatePicker
                        className="min-[260px]:w-full"
                        getPopupContainer={(trigger) =>
                            trigger.parentElement || document.body
                        }
                    />
                </FormItem>
            </Form>
        </Modal>
    );
};

export default AddEventModal;
