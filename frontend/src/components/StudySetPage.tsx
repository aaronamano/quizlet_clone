import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

export default function StudySetPage() {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <div className="bg-[#0A092D] min-h-screen ml-64 p-4">
        <h1 className="mx-2 text-[#F6F7FB] text-3xl font-bold">Test Study Set</h1>
      </div>
    </>
  )
}
