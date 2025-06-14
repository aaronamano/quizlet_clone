import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
import SaveToFolderModal from "./modal/SaveToFolderModal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function StudySetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openModal) {
      setIsModalOpen(true);
    }
  }, [location]);

  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <div className="bg-[#0A092D] min-h-screen ml-64 p-4">
        <h1 className="mx-2 text-[#F6F7FB] text-3xl font-bold">Test Study Set</h1>
      </div>

      <SaveToFolderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
