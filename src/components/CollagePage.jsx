



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CollagePage.css"; // ✅ Import updated CSS

const CollagePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const photos = location.state?.photos || [null, null, null]; // ✅ Get photos from state
  const [frameColor, setFrameColor] = useState("#ffffff"); // Default white frame
  const [showDate, setShowDate] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); // Store selected filter

  return (
    <div className="collage-container">
      {/* Collage Frame with Borders */}
      <div className="collage-frame polaroid-border" style={{ backgroundColor: frameColor }}>
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
        {/* Bottom Section for Date */}
        <div className="polaroid-bottom">
          {showDate && <p className="date-text">{new Date().toLocaleDateString()}</p>}
        </div>
      </div>

      {/* Customization Section */}
      <div className="customization-options">
        <p>Customize Your Photo</p>

        {/* Frame Color Picker */}
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

        {/* Add Date Checkbox */}
        <label className="date-checkbox">
          <input type="checkbox" onChange={() => setShowDate(!showDate)} /> Add date
        </label>

        {/* FILTER OPTIONS */}
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

        {/* Go Home Button */}
        <button className="go-home-button"  onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default CollagePage;


























