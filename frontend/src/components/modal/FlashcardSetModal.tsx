import { Link } from "react-router-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FlashcardSetModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="bg-[#0A092D] rounded-lg p-6 z-50 w-2xl h-96">
                    <div className="mb-4">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                aria-label="Close modal"
                                onClick={onClose}
                                className="text-[#F6F7FB] hover:text-gray-300"
                            >
                                ✕
                            </button>
                        </div>
                        <h1 className="flex justify-center text-2xl font-bold text-[#F6F7FB]">
                            How do you want to create your flashcard set?
                        </h1>
                        <div className="flex justify-center gap-4 mt-3">

                            <button className="bg-[#2E3856] hover:bg-[#3A4562] w-2xs h-60 rounded-md text-[#F6F7FB]">
                                Generate from an upload
                            </button>

                            <Link to="/create-flashcards-set">
                                <button className="bg-[#2E3856] hover:bg-[#3A4562] w-2xs h-60 rounded-md text-[#F6F7FB]">
                                    Create them yourself
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlashcardSetModal;