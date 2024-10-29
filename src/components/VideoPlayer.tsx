import { useRef } from "react";
import geoVideo from "../assets/vid01-02.mp4"; // ქართული ვიდეო
import engVideo from "../assets/react.svg"; // ინგლისური ვიდეო
import rusVideo from "../assets/vid01-02.mp4"; // რუსული ვიდეო

const VideoPlayer = ({
  selectedLanguage,
}: {
  selectedLanguage: string | null;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const handleVideoEnd = () => {
    if (textRef.current) {
      textRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Choose video source based on selected language
  const getVideoSource = () => {
    switch (selectedLanguage) {
      case "geo":
        return geoVideo;
      case "eng":
        return engVideo;
      case "rus":
        return rusVideo;
      default:
        return geoVideo;
    }
  };

  return (
    <>
      <div className="main-section">
        {/* Video player only when a language is selected */}
        {selectedLanguage && (
          <video
            className="main_video"
            ref={videoRef}
            onEnded={handleVideoEnd}
            autoPlay
            muted
            key={selectedLanguage} // Refresh video on language change
          >
            <source src={getVideoSource()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Text section to scroll to */}
        <div className="info-1" ref={textRef}>
          <div className="container">
            <div className="info-1-container">
              <div className="info-1-left"></div>
              <div className="info-1-right">
                <div className="info-1-right-top">
                  <div className="info-1-right-top">
                    <span className="info-1-span">INFINITE DISPLAY</span>
                  </div>
                  <div className="info-1-right-under"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
