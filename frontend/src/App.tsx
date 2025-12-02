import "./App.css";
import LibStudySets from "./components/LibStudySets";
import LibFolders from "./components/LibFolders";
import CreateFlashcardsSetPage from "./components/CreateFlashcardsSetPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudySetPage from "./components/StudySetPage";
import { FolderProvider } from "./contexts/FolderContext";

function App() {
  return (
    <FolderProvider>
      <div className="bg-[#0A092D] min-h">
        <Router>
          <Routes>
            <Route path="/" element={<LibStudySets />} />
            <Route path="/folders" element={<LibFolders />} />
            <Route path="/create-flashcards-set" element={<CreateFlashcardsSetPage />} />
            <Route path="/study-set-page" element={<StudySetPage />}/>
          </Routes>
        </Router>
      </div>
    </FolderProvider>
  );
}

export default App;
