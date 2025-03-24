import "./App.css";
import { CiFolderOn } from "react-icons/ci";
import HorizontalNavbar from "./components/HorizontalNavbar";

function App() {
  return (
    <>
      <HorizontalNavbar />
      <div className="bg-[#0A092D] w-screen min-h-screen">
        <CiFolderOn className="bg-white" />
      </div>
    </>
  );
}

export default App;
