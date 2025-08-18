import React from "react";

interface IProps {
    isModalOpen: boolean;
    setIsModalopen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WatchDashboardVideos: React.FC<IProps> = ({
    isModalOpen,
    setIsModalopen,
}) => {
    return (
        <>
            {isModalOpen && (
                <dialog className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => setIsModalopen(false)}
                            >
                                ✕
                            </button>
                        </form>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default WatchDashboardVideos;
