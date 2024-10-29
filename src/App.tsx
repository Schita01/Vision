import { useState } from "react";
import LanguageModal from "./components/LanguageModal";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [languageSelected, setLanguageSelected] = useState<string | null>(null); // აქ ვაქცევთ null მნიშვნელობას

  return (
    <div className="wrapper">
      {!languageSelected ? (
        <LanguageModal setLanguageSelected={setLanguageSelected} />
      ) : (
        <VideoPlayer selectedLanguage={languageSelected} /> // ვაწვდით არჩეულ ენას
      )}
    </div>
  );
};

export default App;
