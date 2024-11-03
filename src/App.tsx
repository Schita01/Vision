import { useState, useEffect, useCallback } from "react";
import LanguageModal from "./components/LanguageModal";
import VideoPlayer from "./components/VideoPlayer";
import { motion } from "framer-motion";
import "./App.css";
import InfoSection from "./components/InfoSection";

const App = () => {
  // State to manage selected language
  const [languageSelected, setLanguageSelected] = useState<string | null>(null);
  
  // State to track the current section
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  // Dynamically set totalSections based on whether a language is selected
  const totalSections = languageSelected ? 4 : 1;

  // Debounce function to prevent rapid scroll
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault(); // Prevent the default scroll behavior

      // Scrolling down
      if (event.deltaY > 0 && sectionIndex < totalSections - 1) {
        setSectionIndex((prevIndex) => prevIndex + 1);
      } 
      // Scrolling up
      else if (event.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex((prevIndex) => prevIndex - 1);
      }
    },
    [sectionIndex, totalSections]
  );

  useEffect(() => {
    // Add scroll listener with a debounce effect
    let scrollTimeout: any;
    const debouncedHandleScroll = (event: WheelEvent) => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => handleScroll(event), 200); // Adjust debounce time if necessary
    };

    window.addEventListener("wheel", debouncedHandleScroll, { passive: false });

    // Clean up the event listener
    return () => {
      window.removeEventListener("wheel", debouncedHandleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Animation variants for smooth section transitions
  const sectionVariants = {
    enter: { opacity: 0, y: "100vh" },
    center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.5 } },
  };

  return (
    <div className="app">
      {/* Section 1: Language Modal or VideoPlayer */}
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
          {/* Section 2: InfoSection (only visible if languageSelected is set) */}
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

        {/* Section 3: HTTP Calls Section */}
        {languageSelected && (
          <motion.div
            className="section"
            initial="enter"
            animate={sectionIndex === 2 ? "center" : "exit"}
            variants={sectionVariants}
          >
            <div>
              <h2>HTTP Calls</h2>
            </div>
          </motion.div>
        )}

        {/* Section 4: MVP Calls Section */}
        {languageSelected && (
          <motion.div
            className="section"
            initial="enter"
            animate={sectionIndex === 3 ? "center" : "exit"}
            variants={sectionVariants}
          >
            <div>
              <h2>MVP Calls</h2>
            </div>
          </motion.div>
        )}
      </div>
      
    </div>
  );
};

export default App;
