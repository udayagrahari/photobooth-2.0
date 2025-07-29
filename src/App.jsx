// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Photobooth from "./components/Photobooth";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/photobooth" element={<Photobooth />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




















import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Photobooth from "./components/Photobooth";
import CollagePage from "./components/CollagePage";

const App = () => {
  const [photos, setPhotos] = useState([null, null, null]); // Store photos globally

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photobooth" element={<Photobooth setPhotos={setPhotos} />} />
        <Route path="/collage" element={<CollagePage />} />
      </Routes>
    </Router>
  );
};

export default App;
