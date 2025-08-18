import { Modal } from "antd"
interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WatchDashboardVideos: React.FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
    const onCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal open={isModalOpen} footer={null} onCancel={onCancel} closable={true}>

        </Modal>
    );
};

export default WatchDashboardVideos;
