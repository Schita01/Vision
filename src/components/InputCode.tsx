
import React, { useState } from "react";

interface InputCodeProps {
  length: number;
  label: string;
  onComplete: (code: string) => void;
  isError: boolean;
  isSuccess: boolean;
}

const InputCode: React.FC<InputCodeProps> = ({ length, label, onComplete, isError, isSuccess }) => {
  const [code, setCode] = useState(Array(length).fill(""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCode = [...code];
    newCode[index] = e.target.value.slice(-1);
    setCode(newCode);

    if (e.target.value && index < length - 1) {
      document.getElementById(`input-${index + 1}`)?.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length);
    const newCode = paste.split("");
    setCode(newCode);

    if (newCode.length === length) {
      onComplete(newCode.join(""));
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index]) {
      document.getElementById(`input-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="code-input">
      <label className="code-label">{label}</label>
      <div className="input-group">
        {code.map((digit, index) => (
          <input
            className={`form-control ${isError ? "active-error" : isSuccess ? "active-success" : ""}`}
            key={index}
            id={`input-${index}`}
            type="password"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              marginRight: "5px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InputCode;
