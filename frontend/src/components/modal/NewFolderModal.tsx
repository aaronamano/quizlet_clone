interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewFolderModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-[#0A092D] rounded-lg p-6 z-50 w-[500px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-[#F6F7FB]">New Folder</h1>
            <button
              onClick={onClose}
              className="text-[#F6F7FB] hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter folder name"
            className="text-white bg-[#2E3856] p-2 my-2 w-[450px] rounded-md"
          />

          <div className="flex justify-end">
            <button className="flex justify-end text-white bg-[#4255FF] hover:bg-[#423ed8] p-2 rounded-md mt-2">Create Folder</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewFolderModal;