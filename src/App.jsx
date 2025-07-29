// In src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Photobooth from "./components/Photobooth";
import CollagePage from "./components/CollagePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photobooth" element={<Photobooth />} />
        <Route path="/collage" element={<CollagePage />} />
      </Routes>
    </Router>
  );
}

export default App;