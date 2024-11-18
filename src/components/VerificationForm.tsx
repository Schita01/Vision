import React from 'react';
import InputCode from './InputCode';

interface VerificationFormProps {
  length: number;
  label: string;
  onComplete: (code: string) => void;
  isCorrect: boolean;
  isError: boolean; // Add isError to props
}

const VerificationForm: React.FC<VerificationFormProps> = ({ length, label, onComplete, isCorrect, isError }) => {
  return (
    <form className="verification-form" onSubmit={(e) => e.preventDefault()}>
      <h4 className="text-center mb-4">only for investors</h4>
      <span className=' mb-4'>Enter your 6-Digit Code</span>
      <InputCode length={length} label={label} onComplete={onComplete} isError={isError} isSuccess={false} />
      {isCorrect && <p style={{ color: "green" }}>Success</p>}
      {isError && <p style={{ color: "red" }}>Incorrect code. Please try again.</p>}
    </form>
  );
}

export default VerificationForm;
