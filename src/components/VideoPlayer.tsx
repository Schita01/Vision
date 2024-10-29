import React, { useRef, useEffect } from "react";
import videoFile from "../assets/vid01-02.mp4"; // ერთი ვიდეო ფაილი
import geoAudio from "../assets/sas.m4a"; // ქართული აუდიო ფაილი
import engAudio from "../assets/download.webp"; // ინგლისური აუდიო ფაილი
import rusAudio from "../assets/react.svg"; // რუსული აუდიო ფაილი

interface VideoPlayerProps {
  selectedLanguage: string | null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ selectedLanguage }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null); // დამატებულია ref text section-ისთვის

  useEffect(() => {
    if (audioRef.current) {
      // ავირჩევთ აუდიო წყაროს ენაზე დაყრდნობით
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
      // აუდიო ფაილის ავტომატური გაშვება და სინქრონიზაცია ვიდეოსთან
      audioRef.current.play();
    }
  }, [selectedLanguage]);

  const handleVideoEnd = () => {
    if (textRef.current) {
      textRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getVideoSource = () => {
    // ამ ფუნქციაში შეგიძლიათ განსაზღვროთ ვიდეო წყარო ენაზე დაყრდნობით, თუ საჭირო იქნება.
    return videoFile;
  };

  

  return (
    <div className="main-section">
      {/* ვიდეო რენდერება მხოლოდ მაშინ, თუ ენაა არჩეული */}
      {selectedLanguage && (
        <>
          <video
            className="main_video"
            ref={videoRef}
            onEnded={handleVideoEnd}
            autoPlay
            muted
            key={selectedLanguage} // ვიდეო განახლდება ენის ცვლილებაზე
          >
            <source src={getVideoSource()} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <audio ref={audioRef} />
        </>
      )}

      {/* ტექსტის განყოფილება scroll-ისთვის */}

      <div className="main-info">
        <div className="container">
          <div className="mainc-info-container">
            <span className="main-info-title">Features for architecture</span>
            <p className="main-info-text">
            With Unreal Engine, you can take your data from raw CAD, BIM, or DCC files to stunning immersive 
            real-time experiences and offline-rendered-quality linear media in less time than you thought possible.
             Then, iterate to your heart’s content, react to feedback, and see your changes update in the blink of an eye.
            </p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="container">
          <div className="card">
            <div className="card-video"></div>
            <div className="card-info">
              <p className="card-info-title">
                გააქრე ზღვარი <br />
                 რეალურსა და <br />
                 არარეალურს შორის
                
              </p>
              <p className="card-info-text">
                გადადით იმაზე, თუ როგორ გამოიყურება დიზაინი. აჩვენე ხალხს, როგორ გრძნობს თავს. Unreal Engine-ის საშუალებით შეგიძლიათ შექმნათ განსაცვიფრებელი დიზაინით, რომლებიც განსაცვიფრებლად რეალურად იგრძნობთ თავს და შეისწავლეთ ისინი სიცოცხლისუნარიანი დეტალებით, სანამ ოდესმე გატეხავთ.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-container c-bott">
        <div className="container">
        <div className="card">
            <div className="card-info c-i">
              <p className="card-info-title">
                გააქრე ზღვარი <br />
                 რეალურსა და <br />
                 არარეალურს შორის
                
              </p>
              <p className="card-info-text">
                გადადით იმაზე, თუ როგორ გამოიყურება დიზაინი. აჩვენე ხალხს, როგორ გრძნობს თავს. Unreal Engine-ის საშუალებით შეგიძლიათ შექმნათ განსაცვიფრებელი დიზაინით, რომლებიც განსაცვიფრებლად რეალურად იგრძნობთ თავს და შეისწავლეთ ისინი სიცოცხლისუნარიანი დეტალებით, სანამ ოდესმე გატეხავთ.
              </p>
            </div>
            <div className="card-video"></div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default VideoPlayer;