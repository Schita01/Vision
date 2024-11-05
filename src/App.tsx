import { useState, useEffect, useCallback } from "react";
import LanguageModal from "./components/LanguageModal";
import VideoPlayer from "./components/VideoPlayer";
import { motion } from "framer-motion";
import "./App.css";
import InfoSection from "./components/InfoSection";

const App = () => {
  const [languageSelected, setLanguageSelected] = useState<string | null>(null);
  const [sectionIndex, setSectionIndex] = useState<number>(0);
  const totalSections = languageSelected ? 4 : 1;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (isScrolling) return;
      event.preventDefault();
      setIsScrolling(true);

      if (event.deltaY > 0 && sectionIndex < totalSections - 1) {
        setSectionIndex((prevIndex) => prevIndex + 1);
      } else if (event.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex((prevIndex) => prevIndex - 1);
      }

      setTimeout(() => setIsScrolling(false), 900);
    },
    [sectionIndex, totalSections, isScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const sectionVariants = {
    enter: { opacity: 0, y: "100vh" },
    center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.5 } },
  };

  return (
    <div className="app">
      <motion.div
        className="section"
        initial="enter"
        animate={sectionIndex === 0 ? "center" : "exit"}
        variants={sectionVariants}
      >
        {!languageSelected ? (
          <LanguageModal setLanguageSelected={setLanguageSelected} />
        ) : (
          <VideoPlayer selectedLanguage={languageSelected} />
        )}
      </motion.div>

      <div className="bg">
        {languageSelected && (
          <motion.div
            className="section"
            initial="enter"
            animate={sectionIndex === 1 ? "center" : "exit"}
            variants={sectionVariants}
          >
            <InfoSection selectedLanguage={languageSelected} />
          </motion.div>
        )}

        {languageSelected && (
          <motion.div
          className="section"
          initial="enter"
          animate={sectionIndex === 2 ? "center" : "exit"}
          variants={sectionVariants}
          >
            <div className="main-section">

    

      <div className="card-container">
        <div className="container">
          <div className="card-2">
            <div className="card-video"></div>
            <div className="card-info-2">
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
      
            
    </div>
          </motion.div>
        )}

        {languageSelected && (
          <motion.div
            className="section"
            initial="enter"
            animate={sectionIndex === 3 ? "center" : "exit"}
            variants={sectionVariants}
          >
            <div>
              <h2>3</h2>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default App;
