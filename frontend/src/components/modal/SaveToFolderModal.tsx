interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SaveToFolderModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-[#0A092D] rounded-lg p-6 z-50 w-[500px] border border-[#F6F7FB]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-[#F6F7FB]">Save To Folder</h1>
            <button
              onClick={onClose}
              className="text-[#F6F7FB] hover:text-gray-300"
            >
              ✕
            </button>
          </div>
          <button
            type="button"
            className="inline-flex justify-center items-center gap-2 rounded-md border border-[#2E3856] shadow-sm px-4 py-2 bg-[#0A092D] text-sm font-medium text-[#F6F7FB]"
          >
            Select Folder
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <br />

          <div className="flex justify-end">
            <button className="bg-[#2E3856] hover:bg-[#3A4562] h-11 w-20 rounded-md text-[#F6F7FB] mt-10">
              Save
            </button>
          </div>

        </div>

      </div>
    </>
  );
};

export default SaveToFolderModal;