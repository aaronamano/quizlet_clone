import "./App.css";
import HorizontalNavbar from "./components/HorizontalNavbar";
import LibFolders from "./components/LibFolders";
import VerticalNavbar from "./components/VerticalNavbar";

function App() {
  return (
    <>
      <div className="bg-[#0A092D] min-h">
        <HorizontalNavbar />
        <VerticalNavbar />
        <LibFolders />
      </div>
    </>
  );
}

export default App;
