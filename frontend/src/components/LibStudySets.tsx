import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import { Link } from "react-router-dom";

function StudySetCard() {
  return (
    <>
      <div className=" bg-[#2E3856] w-[1040px] h-16 rounded-md my-5">
        <div className="m-2">
          <p className="text-[#F6F7FB]">Number of Terms</p>
          <div className="flex flex-row text-[#F6F7FB] my-1">
            <div className="font-bold">Test Folder</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function LibStudySets() {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <div className="bg-[#0A092D] min-h-screen ml-64 p-4">
        {/* title */}
        <h1 className="mx-2 text-[#F6F7FB] text-3xl font-bold">
          Your Library
        </h1>

        {/* links */}
        <div className="flex flex-row my-10">
          <Link to="/">
            <div className="mx-2 text-[#F6F7FB] hover:underline">
              <p>Flashcard Sets</p>
            </div>
          </Link>

          <div className="mx-2 text-[#F6F7FB] hover:underline">
            <p>Study Guides</p>
          </div>

          <div className="mx-2 text-[#F6F7FB] hover:underline">
            <p>Expert Solutions</p>
          </div>

          <Link to="/folders">
            <div className="mx-2 text-[#F6F7FB] hover:underline">
              <p>Folders</p>
            </div>
          </Link>
        </div>

        <hr className="text-[#2E3856] relative top-[-30px]"></hr>

        {/* dropdown */}
        <div className="relative top-[40px]">
          <button
            type="button"
            className="inline-flex justify-center items-center gap-2 rounded-md border border-[#2E3856] shadow-sm px-4 py-2 bg-[#0A092D] text-sm font-medium text-[#F6F7FB]"
          >
            Recent
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
        </div>

        {/* search your folders */}
        <div className="flex justify-end">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search flashcards"
              className="text-white bg-[#2E3856] p-2 m-1.5 w-[420px] rounded-md"
            />
            <HiMiniMagnifyingGlass className="text-white w-[20px] h-[20px] absolute top-1/2 transform -translate-y-1/2 translate-x-[390px]" />
          </div>
        </div>

        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
        <StudySetCard />
      </div>
    </>
  );
}