interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const SaveToFolderModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
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
        <div className="text-[#F6F7FB]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SaveToFolderModal;