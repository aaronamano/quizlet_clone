import { CiFolderOn } from "react-icons/ci";
import { FaFolderOpen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewFolderModal from "./modal/NewFolderModal";
import { useFolders } from "../contexts/FolderContext";

function FolderList() {
  const { folders } = useFolders();
  
  return (
    <>
      {folders.map((folder) => (
        <div key={folder.id} className="my-4 hover:bg-[#2E3856]">
          <button className="flex flex-row text-[#F6F7FB]">
            <CiFolderOn className="w-6 h-6 text-[#F6F7FB]" />
            <div className="mx-1 my-[-1]">{folder.name}</div>
          </button>
        </div>
      ))}
    </>
  )
}

export default function VerticalNavbar() {
  const [isNewFolderModalOpen, setIsNewFolderModalOpen] = useState(false);
  const { addFolder } = useFolders();

  const handleCreateFolder = (folderName: string) => {
    addFolder(folderName);
  };

  return (
    <>
      <nav className="absolute left-0 h-screen w-64 bg-[#0A092D]">
        <div className="mx-2">
          <div className="my-4 hover:bg-[#2E3856]">
            <Link to="/">
              <button className="flex flex-row text-[#F6F7FB]">
                <GoHome className="w-6 h-6 text-[#F6F7FB]" />
                <div className="mx-1 my-[-1]">Home</div>
              </button>
            </Link>
          </div>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <FaFolderOpen className="w-5 h-5 text-[#F6F7FB] mx-1" />
              <div className="my-[-1]">Your Library</div>
            </button>
          </div>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <FaRegBell className="w-6 h-6 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Notifications</div>
            </button>
          </div>

          <hr className="text-[#2E3856]"></hr>

          <p className="text-[#F6F7FB] my-2">Your Folders</p>

          <FolderList />

          <div className="my-4 hover:bg-[#2E3856]">
            <button
              className="flex flex-row text-[#F6F7FB]"
              onClick={() => setIsNewFolderModalOpen(true)}
            >
              <FaPlus className="w-4 h-4 text-[#F6F7FB] m-1" />
              <div className="mx-1 my-[-1]">Add Folder</div>
            </button>
          </div>
        </div>
      </nav>

      <NewFolderModal
        isOpen={isNewFolderModalOpen}
        onClose={() => setIsNewFolderModalOpen(false)}
        onCreateFolder={handleCreateFolder}
      />
    </>
  );
}