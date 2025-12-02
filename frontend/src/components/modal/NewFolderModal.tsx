import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateFolder: (folderName: string) => void;
}

const NewFolderModal: React.FC<ModalProps> = ({ isOpen, onClose, onCreateFolder }) => {
  const [folderName, setFolderName] = useState('');
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (folderName.trim()) {
      onCreateFolder(folderName.trim());
      setFolderName('');
      onClose();
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter folder name"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="text-white bg-[#2E3856] p-2 my-2 w-[450px] rounded-md"
            />

            <div className="flex justify-end">
              <button 
                type="submit"
                className="flex justify-end text-white bg-[#4255FF] hover:bg-[#423ed8] p-2 rounded-md mt-2"
              >
                Create Folder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewFolderModal;