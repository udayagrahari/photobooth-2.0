import React, { useState, useRef } from "react"; // --- 1. ADD useRef ---
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas"; // --- 2. ADD html2canvas IMPORT ---
import "./CollagePage.css";

const CollagePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const photos = location.state?.photos || [null, null, null];
  const [frameColor, setFrameColor] = useState("#ffffff");
  const [showDate, setShowDate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  // --- 3. CREATE REF AND DOWNLOAD FUNCTION ---
  const collageRef = useRef(null); // Create a ref to target the collage

  const handleDownload = () => {
    // Check if the ref is attached to an element
    if (collageRef.current) {
      html2canvas(collageRef.current, {
        useCORS: true, // Important for external images/fonts
        scale: 2,      // Renders at a higher resolution for better quality
      }).then((canvas) => {
        // Convert the canvas "screenshot" to a PNG image URL
        const imageUrl = canvas.toDataURL("image/png");

        // Create a temporary link to trigger the browser download
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "my-collage.png"; // Set the default filename
        
        // Add the link to the page, click it, then remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  };
  // --- END OF NEW CODE ---

  return (
    <div className="collage-container">
      {/* --- 4. ATTACH THE REF to your collage frame --- */}
      <div ref={collageRef} className="collage-frame polaroid-border" style={{ backgroundColor: frameColor }}>
        <div className="collage-frame-content">
          {photos.map((photo, index) => (
            <div key={index} className={`photo-frame ${selectedFilter}`}>
              {photo ? (
                <img src={photo} alt={`Collage Photo ${index + 1}`} className="collage-photo" />
              ) : (
                <div className="empty-photo">No Photo</div>
              )}
            </div>
          ))}
        </div>
        <div className="polaroid-bottom">
          {showDate && <p className="date-text">{new Date().toLocaleDateString()}</p>}
        </div>
      </div>

      <div className="customization-options">
        <p>Customize Your Photo</p>

        <div className="color-picker">
          {["#FFFFFF", "#000000", "#FFB6C1", "#FFD700", "#90EE90", "#ADD8E6", "#800080"].map((color) => (
            <button
              key={color}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => setFrameColor(color)}
            />
          ))}
        </div>

        <label className="date-checkbox">
          <input type="checkbox" onChange={() => setShowDate(!showDate)} /> Add date
        </label>

        <div className="filter-options">
          <p>Choose a Filter</p>
          <div className="filters">
            {[
              "sepia", "black-white", "warm-retro", "cool-retro",
              "grainy-film", "lomo", "faded-rose", "moody-dark",
              "sunkissed", "polaroid-faded"
            ].map((filter) => (
              <button key={filter} className={`filter-btn`} onClick={() => setSelectedFilter(filter)}>
                {filter.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* --- 5. ADD THE DOWNLOAD BUTTON --- */}
        <button className="download-button" onClick={handleDownload}>
          Download
        </button>
        <button className="go-home-button" onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default CollagePage;
