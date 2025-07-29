// In src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // We will create this file next

const Home = () => {
  const navigate = useNavigate();

  const startPhotobooth = () => {
    navigate('/photobooth');
  };

  return (
    <div className="home-container">
      <div className="left-panel">
        <div className="heart-background">
          <h1>Welcome to Our Photobooth 💖</h1>
          <p>
            So, me planned to make a photobooth for you. And also decided ki agar 4 saal kisi cheez ki padhai kari hai toh uska prayog bhi karu, toh is liye prastut hai aapke samne aaapka apna photobooth.
          </p>
          <button onClick={startPhotobooth}>
            Start Photobooth
          </button>
        </div>
      </div>
      <div className="right-panel">
        <img src="/polaroid.png" alt="Film strip one" className="film-strip film-strip-1" />
        <img src="/polaroid.png" alt="Film strip two" className="film-strip film-strip-2" />
      </div>
    </div>
  );
};

export default Home;