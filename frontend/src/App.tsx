import "./App.css";
import LibStudySets from "./components/LibStudySets";
import LibFolders from "./components/LibFolders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[#0A092D] min-h">
        <Router>
          <Routes>
            <Route path="/" element={<LibStudySets />} />
            <Route path="/folders" element={<LibFolders />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
