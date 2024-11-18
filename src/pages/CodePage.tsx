import  {  useState } from "react";
import { useNavigate } from "react-router-dom";
import videoUrl from "../assets/Roofstock_LandingVideo_102523-v3 (1).webm";
import VerificationForm from "../components/VerificationForm";
import logo from "../assets/stereo.svg";
import { useLanguage } from "../context/LanguageProvider";

const CodePage: React.FC = () => {
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (code: string) => {
    if (code === "111111") {
      setIsCorrect(true);
      setIsError(false);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setIsCorrect(false);
      setIsError(true); // Set error state when the code is incorrect
    }
  };

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { selectedLanguage, languages, setSelectedLanguage } = useLanguage();

  // Toggle language dropdown
  const toggleDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  // Handle language selection
  const handleLanguageSelection = (lang: string) => {
    setSelectedLanguage(lang);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <div className="code_wrapper">
      <img className="logo" src={logo} alt="" />
      <span className="main-span">
        {languages[selectedLanguage]?.codePageTitle || "Default Title"}
      </span>
      <VerificationForm
        length={6}
        onComplete={handleSubmit}
        isCorrect={isCorrect}
        isError={isError}
        label={languages[selectedLanguage]?.codeInnerText || "Enter Code"}
      />

      <div className="language-menu">
        <button className="language-btn" onClick={toggleDropdown}>
          {selectedLanguage + " ▼"}
        </button>
        {isLanguageOpen && (
          <ul className="language-dropdown">
            {Object.keys(languages).map((lang) => (
              <li
                key={lang}
                onClick={() => handleLanguageSelection(lang)}
                className="dropdown-item"
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      <video autoPlay muted loop className="main_video">
        <source src={videoUrl} type="video/webm" />
      </video>

      {/* Success/Error Message */}
      {isCorrect && <p>{languages[selectedLanguage]?.codeCorrect}</p>}
      {isError && <p>{languages[selectedLanguage]?.codeIncorrect}</p>}
    </div>
  );
};

export default CodePage;
