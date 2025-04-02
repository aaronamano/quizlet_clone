import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function HorizontalNavbar(){
    return (
        <>
          <nav className="bg-[#0A092D] flex flex-row">
            <button>
              <IoMenu className="text-white w-[30px] h-[30px] m-1 hover:bg-[#2E3856]" />
            </button>
    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0A092D"
                d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"
              ></path>
              <path
                fill="#fff"
                d="M37,36l-3.664-4.478C34.999,29.462,36,26.847,36,24c0-6.617-5.383-12-12-12s-12,5.383-12,12	s5.383,12,12,12c2.095,0,4.065-0.543,5.781-1.49L31,36H37z M24,31c-3.86,0-7-3.141-7-7s3.14-7,7-7s7,3.141,7,7	c0,1.278-0.35,2.473-0.95,3.505L28,25h-6l4.519,5.523C25.736,30.827,24.889,31,24,31z"
              ></path>
            </svg>
    
            <div className="flex flex-grow justify-center">
              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="Search for study guides"
                  className="text-white bg-[#2E3856] p-2 pl-10 m-1.5 w-2xl rounded-md"
                />
                <HiMiniMagnifyingGlass className="absolute top-1/2 transform -translate-y-1/2 translate-x-3.5 text-white w-[20px] h-[20px]" />
              </div>
            </div>
    
            <div className="flex m-2 mx-3 space-x-3 ml-auto">
              <button className="bg-[#4255FF] p-2 rounded-xs">
                <FaPlus className=" text-white w-[20px] h-[20px]" />
              </button>
    
              <button className="bg-[#FFCD1F] p-2 rounded-xs">
                Upgrade: free 7-day trial
              </button>
    
              <button>
                <CgProfile className="text-white w-[30px] h-[30px]" />
              </button>
            </div>
          </nav>
        </>
      );
}    



export default HorizontalNavbar;