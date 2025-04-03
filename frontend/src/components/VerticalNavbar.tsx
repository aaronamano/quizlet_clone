import { CiFolderOn } from "react-icons/ci";
import { FaFolderOpen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";

function VerticalNavbar() {
  return (
    <>
      <nav className="absolute left-0 h-screen w-64 bg-[#0A092D]">
        <div className="mx-2">
          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <GoHome className="w-7 h-7 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Home</div>
            </button>
          </div>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <FaFolderOpen className="w-7 h-7 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Your Library</div>
            </button>
          </div>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <FaRegBell className="w-7 h-7 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Notifications</div>
            </button>
          </div>

          <hr className="text-[#2E3856]"></hr>

          <p className="text-[#F6F7FB] my-2">Your Folders</p>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <CiFolderOn className="w-7 h-7 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Test Folder</div>
            </button>
          </div>

          <div className="my-4 hover:bg-[#2E3856]">
            <button className="flex flex-row text-[#F6F7FB]">
              <FaPlus className="w-5 h-5 text-[#F6F7FB]" />
              <div className="mx-1 my-[-1]">Add Folder</div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default VerticalNavbar;
