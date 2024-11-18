import { createContext, useState, useContext, ReactNode } from "react";

// Define types for the context state
interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  languages: any; // You can define the type of your translations if needed
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("GE");

  const languages =  {
    EN: {
      codePageTitle: "",
      codeInnerTitle: "Only For Investors",
      codeInnerText: "Enter your 6-Digit Code",
      codeCorrect: "Code is Correct",
      codeIncorrect: "Incorrect code. Please try again."
      
    },
    AR: {
      codeTitle: "",
      codeInnerTitle: "فقط للمستثمرين",
      codeInnerText: "أدخل الرمز المكون من 6 أرقام",
      codeCorrect: "الرمز صحيح",
      codeIncorrect:"الرمز غير صحيح. يرجى المحاولة مرة أخرى."
      
      
    },
    RU: {
      codeTitle: "",
      codeInnerTitle: "Только для инвесторов",
      codeInnerText: "Введите свой 6-значный код",
      codeCorrect: "Код верный",
      codeIncorrect:"Неверный код. Пожалуйста, попробуйте снова.",
      
     
    },
  };
  
  return (
    <LanguageContext.Provider
    value={{ selectedLanguage, setSelectedLanguage, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
