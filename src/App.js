import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GalleryPage from "./GalleryPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="GalleryPage" element={<GalleryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
