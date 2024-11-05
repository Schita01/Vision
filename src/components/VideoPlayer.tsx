import { useRef, useEffect, useState } from "react";
import videoFile from "../assets/esw.mp4"; // Main video file
import geoAudio from "../assets/GEO.mp4"; // Georgian audio file
import engAudio from "../assets/ENG.mp3"; // English audio file
import rusAudio from "../assets/RUS.mp3"; // Russian audio file

interface VideoPlayerProps {
  selectedLanguage: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ selectedLanguage }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  // State to control visibility of the scroll indicator
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  // Set the audio source based on selected language
  useEffect(() => {
    if (audioRef.current) {
      switch (selectedLanguage) {
        case "geo":
          audioRef.current.src = geoAudio;
          break;
        case "eng":
          audioRef.current.src = engAudio;
          break;
        case "rus":
          audioRef.current.src = rusAudio;
          break;
        default:
          audioRef.current.src = geoAudio;
          break;
      }
      audioRef.current.play();
    }
  }, [selectedLanguage]);

  // Handle the end of the video to scroll to the text section
  const handleVideoEnd = () => {
    if (textRef.current) {
      textRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delay display of the scroll indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrollVisible(true);
    }, 3000); // 3-second delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Function to get the video source
  const getVideoSource = () => {
    return videoFile;
  };

  return (
    <div className="main-section">
      {/* Render video only if a language is selected */}
      {selectedLanguage && (
        <>
          <video
            className="main_video"
            ref={videoRef}
            onEnded={handleVideoEnd}
            autoPlay
            key={selectedLanguage} // Video reloads on language change
          >
            <source src={getVideoSource()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <audio ref={audioRef} />
        </>
      )}

      {/* Scroll indicator with conditional visibility */}
      {isScrollVisible && (
        <div className="scroll-bottom">
          <div className="center scroll-down">
            <h5>Scroll To Bottom</h5>
            <img src="/src/assets/scroll.gif" alt="Scroll indicator" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
