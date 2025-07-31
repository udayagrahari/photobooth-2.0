// import "./Photobooth.css";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Photobooth = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const audioRef = useRef(null);
//   const [photos, setPhotos] = useState([null, null, null]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [countdown, setCountdown] = useState(null);
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Start music off
//   const navigate = useNavigate();

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.error("Error accessing webcam:", err);
//       }
//     };
//     startCamera();

//     // Ensure music only plays after user interaction
//     const enableAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.volume = 0.5;
//         audioRef.current.play().catch((err) => console.error("Autoplay blocked:", err));
//         setIsMusicPlaying(true);
//       }
//       window.removeEventListener("click", enableAudio);
//     };
//     window.addEventListener("click", enableAudio);

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
//       }
//       window.removeEventListener("click", enableAudio);
//     };
//   }, []);

//   const capturePhoto = () => {
//     if (!canvasRef.current || !videoRef.current) return;

//     const context = canvasRef.current.getContext("2d");
//     context.drawImage(videoRef.current, 0, 0, 320, 240);
    
//     const newPhotos = [...photos];
//     newPhotos[currentPhotoIndex] = canvasRef.current.toDataURL("image/png");
//     setPhotos(newPhotos);

//     if (currentPhotoIndex < 2) {
//       setCurrentPhotoIndex(currentPhotoIndex + 1);
//     }
//   };

//   const startTimer = () => {
//     if (currentPhotoIndex > 2) return;

//     setCountdown(3);
//     let count = 3;
//     const interval = setInterval(() => {
//       count--;
//       setCountdown(count);
//       if (count === 0) {
//         clearInterval(interval);
//         capturePhoto();
//         setCountdown(null);
//       }
//     }, 1000);
//   };

//   const retakePhoto = (index) => {
//     setPhotos((prevPhotos) => {
//       const updatedPhotos = [...prevPhotos];
//       updatedPhotos[index] = null;
//       return updatedPhotos;
//     });
//     setCurrentPhotoIndex(index); // Ensure the index updates
//   };

//   const handleConfirm = () => {
//     navigate("/collage", { state: { photos } });
//   };

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       if (isMusicPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsMusicPlaying(!isMusicPlaying);
//     }
//   };

//   return (
//     <div className="photobooth-container">
//       {/* 🎵 Music Player */}
//       <audio ref={audioRef} src="/music.mp3" loop />

//       <button className="music-btn" onClick={toggleMusic}>
//         {isMusicPlaying ? "🔇 mute music" : "🔊 play music"}
//       </button>

//       {/* Left Side Image */}
//       <div className="left-section">
//         <img src="/image.png" alt="Left Background" className="left-bg" />
//       </div>

//       {/* Right Side GIF */}
//       <div className="right-section">
//         <video src="/smilevid.mp4" autoPlay muted loop className="video-bg"></video>
//       </div>

//       {/* Webcam Preview */}
//       <div className="webcam-container">
//         <video ref={videoRef} autoPlay className="webcam"></video>
//         <canvas ref={canvasRef} width="320" height="240" hidden></canvas>
//         {countdown !== null && <div className="countdown">{countdown}</div>}
//       </div>

//       {/* Photo Placeholders */}
//       <div className="photos-container">
//         {photos.map((photo, index) => (
//           <div key={index} className="photo-box">
//             {photo ? <img src={photo} alt={`Photo ${index + 1}`} /> : <div className="empty-photo">{index + 1}</div>}
//             {photo && <button className="retake-btn" onClick={() => retakePhoto(index)}>Retake</button>}
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="button-container">
//         {currentPhotoIndex < 3 && (
//           <button className="capture-btn" onClick={startTimer}>capture</button>
//         )}
//         {photos.every((photo) => photo !== null) && (
//           <button className="confirm-btn" onClick={handleConfirm}>confirm</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Photobooth;































































// import "./Photobooth.css";
// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Photobooth = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const audioRef = useRef(null);
//   const [photos, setPhotos] = useState([null, null, null]);
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   const [countdown, setCountdown] = useState(null);
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Start music off
//   const navigate = useNavigate();

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) videoRef.current.srcObject = stream;
//       } catch (err) {
//         console.error("Error accessing webcam:", err);
//       }
//     };
//     startCamera();

//     // Ensure music only plays after user interaction
//     const enableAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.volume = 0.5;
//         audioRef.current.play().catch((err) => console.error("Autoplay blocked:", err));
//         setIsMusicPlaying(true);
//       }
//       window.removeEventListener("click", enableAudio);
//     };
//     window.addEventListener("click", enableAudio);

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
//       }
//       window.removeEventListener("click", enableAudio);
//     };
//   }, []);

//   const capturePhoto = () => {
//     if (!canvasRef.current || !videoRef.current) return;

//     const context = canvasRef.current.getContext("2d");
//     context.drawImage(videoRef.current, 0, 0, 320, 240);
    
//     const newPhotos = [...photos];
//     newPhotos[currentPhotoIndex] = canvasRef.current.toDataURL("image/png");
//     setPhotos(newPhotos);

//     if (currentPhotoIndex < 2) {
//       setCurrentPhotoIndex(currentPhotoIndex + 1);
//     }
//   };

//   const startTimer = () => {
//     if (currentPhotoIndex > 2) return;

//     setCountdown(3);
//     let count = 3;
//     const interval = setInterval(() => {
//       count--;
//       setCountdown(count);
//       if (count === 0) {
//         clearInterval(interval);
//         capturePhoto();
//         setCountdown(null);
//       }
//     }, 1000);
//   };

//   const retakePhoto = (index) => {
//     setPhotos((prevPhotos) => {
//       const updatedPhotos = [...prevPhotos];
//       updatedPhotos[index] = null;
//       return updatedPhotos;
//     });
//     setCurrentPhotoIndex(index); // Ensure the index updates
//   };

//   const handleConfirm = () => {
//     navigate("/collage", { state: { photos } });
//   };

//   const toggleMusic = () => {
//     if (audioRef.current) {
//       if (isMusicPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsMusicPlaying(!isMusicPlaying);
//     }
//   };

//   return (
//     <div className="photobooth-container">
//   <audio ref={audioRef} src="/music.mp3" loop />

//   <button className="music-btn" onClick={toggleMusic}>
//     {isMusicPlaying ? "🔇 mute music" : "🔊 play music"}
//   </button>

//   <div className="left-section">
//     <div className="webcam-photos">
//       {/* Webcam Preview */}
//       <div className="webcam-container">
//         <video ref={videoRef} autoPlay className="webcam"></video>
//         <canvas ref={canvasRef} width="320" height="240" hidden></canvas>
//         {countdown !== null && <div className="countdown">{countdown}</div>}
//       </div>

//       {/* Photo Placeholders Below Webcam */}
//       <div className="photos-container">
//         {photos.map((photo, index) => (
//           <div key={index} className="photo-box">
//             {photo ? <img src={photo} alt={`Photo ${index + 1}`} /> : <div className="empty-photo">{index + 1}</div>}
//             {photo && <button className="retake-btn" onClick={() => retakePhoto(index)}>Retake</button>}
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Capture/Confirm Buttons */}
//     <div className="button-container">
//       {currentPhotoIndex < 3 && (
//         <button className="capture-btn" onClick={startTimer}>capture</button>
//       )}
//       {photos.every((photo) => photo !== null) && (
//         <button className="confirm-btn" onClick={handleConfirm}>confirm</button>
//       )}
//     </div>
//   </div>

//   {/* Right Side - 40% for the GIF/Video */}
//   <div className="right-section">
//     <video src="/smilevid.mp4" autoPlay muted loop className="video-bg"></video>
//   </div>
// </div>

//   );
// };

// export default Photobooth;

































import "./Photobooth.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Photobooth = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [photos, setPhotos] = useState([null, null, null]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };
    startCamera();

    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch((err) => console.error("Autoplay blocked:", err));
        setIsMusicPlaying(true);
      }
      window.removeEventListener("click", enableAudio);
    };
    window.addEventListener("click", enableAudio);

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  const capturePhoto = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const context = canvasRef.current.getContext("2d", { willReadFrequently: true });
    context.drawImage(videoRef.current, 0, 0, 320, 240);

    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos[currentPhotoIndex] = canvasRef.current.toDataURL("image/png");
      return updatedPhotos;
    });

    if (currentPhotoIndex < 2) {
      setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
    }
  };

  const startTimer = () => {
    if (currentPhotoIndex >= 3) return;

    setCountdown(3);
    let count = 3;
    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        capturePhoto();
        setCountdown(null);
      }
    }, 1000);
  };

  const retakePhoto = (index) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos[index] = null;
      return updatedPhotos;
    });
    setCurrentPhotoIndex(index);
  };

  const handleConfirm = () => {
    navigate("/collage", { state: { photos } });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="photobooth-container">
      <audio ref={audioRef} src="/music.mp3" loop />

      <button className="music-btn" onClick={toggleMusic}>
        {isMusicPlaying ? "🔇 Mute Music" : "🔊 Play Music"}
      </button>

      <div className="left-section">
        <div className="webcam-photos">
          <div className="webcam-container">
            <video ref={videoRef} autoPlay className="webcam"></video>
            <canvas ref={canvasRef} width="320" height="240" hidden></canvas>
            {countdown !== null && <div className="countdown">{countdown}</div>}
          </div>

          <div className="photos-container">
            {photos.map((photo, index) => (
              <div key={index} className="photo-box">
                {photo ? <img src={photo} alt={`Photo ${index + 1}`} /> : <div className="empty-photo">{index + 1}</div>}
                {photo && <button className="retake-btn" onClick={() => retakePhoto(index)}>Retake</button>}
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          {currentPhotoIndex < 3 && (
            <button className="capture-btn" onClick={startTimer}>Capture</button>
          )}
          {photos.every((photo) => photo !== null) && (
            <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
          )}
        </div>
      </div>

      <div className="right-section">
        <video src="/smilevid.mp4" autoPlay muted loop className="video-bg"></video>
      </div>
    </div>
  );
};

export default Photobooth;






































