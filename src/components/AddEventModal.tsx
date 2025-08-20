import { Modal } from "antd";

interface IProps {
    open: boolean;
    onCancel: () => void
}

const AddEventModal: React.FC<IProps> = ({ open, onCancel }) => {
    const handleCancel = () => {
       onCancel()
    }
    return (
        <Modal open={open} onCancel={handleCancel}>

        </Modal>
    )
}

export default AddEventModal