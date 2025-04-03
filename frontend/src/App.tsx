import "./App.css";
import HorizontalNavbar from "./components/HorizontalNavbar";
import LibFolders from "./components/LibFolders";
import VerticalNavbar from "./components/VerticalNavbar";
import LibStudySets from "./components/LibStudySets";

function App() {
  return (
    <>
      <div className="bg-[#0A092D] min-h">
        <HorizontalNavbar />
        <VerticalNavbar />
        <LibStudySets />
      </div>
    </>
  );
}

export default App;
