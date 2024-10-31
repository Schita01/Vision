import React from "react";

interface LanguageModalProps {
  setLanguageSelected: (value: string) => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ setLanguageSelected }) => {
  const handleLanguageSelect = (lang: string) => {
    console.log(`Selected Language: ${lang}`);
    setLanguageSelected(lang); // ენების არჩევის შემდეგ ცვლილების ნიშანი
  };

  return (
    <div className="modal">
      <h1>FT</h1>
      <select
        className="language-select"
        onChange={(e) => handleLanguageSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Select a language
        </option>
        <option value="geo">ქართული</option>
        <option value="eng">English</option>
        <option value="rus">Русский</option>
      </select>
    </div>
  );
};

export default LanguageModal;
