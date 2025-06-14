import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import SaveToFolderModal from "./modal/SaveToFolderModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function StudySetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openModal) {
      setIsModalOpen(true);
    }
  }, [location]);

  function Flashcard() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <>
        <div
          className="absolute top-[25%] left-1/2 transform -translate-x-1/2 max-w-2xl w-full cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="bg-[#2E3856] rounded-xl shadow-lg p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              {!isFlipped ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#F6F7FB]">Term</h2>
                </div>
              ) : (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#F6F7FB]">Definition</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <div className="bg-[#0A092D] min-h-screen ml-64 p-4">
        <h1 className="mx-2 text-[#F6F7FB] text-3xl font-bold">Test Study Set</h1>
      </div>

      <Flashcard />

      <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex space-x-8">
        <div className="border-2 border-[#2E3856] p-3 rounded-4xl">
          <FaArrowLeft className="text-[#F6F7FB] text-3xl w-14 cursor-pointer" />
        </div>
        <p className="text-[#F6F7FB] text-2xl font-bold mt-3">1/2</p>
        <div className="border-2 border-[#2E3856] p-3 rounded-4xl">
          <FaArrowRight className="text-[#F6F7FB] text-3xl w-14 cursor-pointer" />
        </div>
      </div>

      <SaveToFolderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
