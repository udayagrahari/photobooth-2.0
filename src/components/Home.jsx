// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">
//       {/* Left Section - Text & Start Button */}
//       <div className="left-section">
//         <h1>Welcome to the Photobooth 📸</h1>
//         <p>Capture your best moments in style!</p>
//         <Link to="/photobooth">
//           <button className="start-btn">Start Photobooth</button>
//         </Link>
//       </div>

//       {/* Right Section - Aesthetic Images */}
//       <div className="right-section">
//         <img src="/aesthetic-image.jpg" alt="Aesthetic 1" className="aesthetic-img img1" />
//         <img src="/aesthetic-image.jpg" alt="Aesthetic 2" className="aesthetic-img img2" />
//       </div>
//     </div>
//   );
// };

// export default Home;

















import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Section - Text & Start Button */}
      <div className="left-section">
        <h1>Welcome to the Photobooth 💗</h1>
        <p>In a world that never stops moving, some moments beg to be held a little longer. A stolen glance, a quiet laugh, the warmth of a hand in yours—gone in an instant, yet alive in memory. 
          Here, we capture the in-betweens, the almost-forgottens, the feelings too beautiful to fade.</p>
        <Link to="/photobooth">
          <button className="start-btn">Start Photobooth</button>
        </Link>
      </div>

      {/* Right Section - Pink BG & Polaroid Images */}
      <div className="right-section">
        <img src="/aesthetic-image.jpg" alt="Polaroid 1" className="polaroid img1" />
        <img src="/aesthetic-image.jpg" alt="Polaroid 2" className="polaroid img2" />
      </div>
    </div>
  );
};

export default Home;
