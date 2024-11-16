import React, { useCallback, useEffect, useRef, useState } from "react";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import FinalPage from "./components/FinalPage";

function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const audioRef = useRef();

  const songs = useCallback(() => {
    return [
      {
        title: "Tunggu Apa Lagi",
        artist: "Nyoman Paul",
        src: "/song/Nyoman Paul - Tunggu Apa Lagi.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Tunggu Apa Lagi",
        artist: "Nyoman Paul",
        src: "/song/Nyoman Paul - Tunggu Apa Lagi.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Keep You Safe",
        artist: "Artist 3",
        src: "/song/Yahya - keepyousafe.mp3",
        type: "audio/mpeg",
      },
    ];
  }, []);

  useEffect(() => {
    const accept = localStorage.getItem("accepted");

    if (accept) setStep(3);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (step === 3) {
        audioRef.current.pause();
        const currentSong = songs()[step - 1];
        audioRef.current.src = currentSong.src;
        audioRef.current.load();
        audioRef.current.play().catch((err) => {
          console.error("Playback error:", err);
        });
      }
    }
  }, [songs, step]);

  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
    audioRef.current.play().catch((err) => {
      console.error("Playback error:", err);
    });
  };

  return (
    <div>
      <div
        className={`overlay ${isOverlayVisible ? "" : "hidden"}`}
        onClick={handleOverlayClick}
      >
        <span>Click to Start</span>
      </div>

      <audio loop ref={audioRef} controls style={{ display: "none" }}>
        <source src={songs()[step - 1]?.src} type={songs()[step - 1]?.type} />
        Your browser does not support the audio element.
      </audio>
      {step === 1 && !isOverlayVisible && <LandingPage onNext={nextStep} />}
      {step === 2 && <MainPage onNext={nextStep} />}
      {step === 3 && <FinalPage onBack={prevStep} />}
      <div className="background" style={{ zIndex: "-999" }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;
