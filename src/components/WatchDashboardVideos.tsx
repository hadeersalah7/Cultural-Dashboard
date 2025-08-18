import { Modal } from "antd"
interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    videos: string | undefined
}

const WatchDashboardVideos: React.FC<IProps> = ({ isModalOpen, setIsModalOpen, videos }) => {
    const onCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal open={isModalOpen} footer={null} onCancel={onCancel} closable={true} title="Cultural Content" width={900} height={600}>
            <div className="aspect-video">
                <iframe
                    src={videos}
                    title="Cultural Video"
                    allowFullScreen
                    className="w-full h-full rounded"
                />
            </div>

        </Modal>
    );
};

export default WatchDashboardVideos;
