// import React, { useState } from "react";
// import LanguageModal from "./LanguageModal";
// import VideoPlayer from "./VideoPlayer";

// const VideoContainer = () => {
//   // ენის არჩევის მდგომარეობა
//   const [languageSelected, setLanguageSelected] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>("");

//   // ენების არჩევის დამუშავება
//   const handleLanguageSelection = (lang: string) => {
//     setSelectedLanguage(lang);
//     setLanguageSelected(true); // ენები არჩეულია
//   };

//s

//   return (
//     <div>
//       {/* თუ ენა არ არის არჩეული, აჩვენე მოდალი */}
//       {!languageSelected ? (
//         <LanguageModal setLanguageSelected={handleLanguageSelection} />
//       ) : (
//         <VideoPlayer selectedLanguage={selectedLanguage} />
//       )}
//     </div>
//   );
// };

// export default VideoContainer;
