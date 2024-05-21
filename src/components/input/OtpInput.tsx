import React, { useRef, ChangeEvent } from 'react';

type Props = {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPInput: React.FC<Props> = ({ otp, setOtp }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    // Move to the next input field if the current one is filled
    if (e.target.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to the previous input field if backspacing on an empty field
    if (!e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="space-x-4">
        {otp.map((digit, index) => (
          <input
            name='OTP'
            key={index}
            ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
            type="text"
            value={digit}
            maxLength={1}
            className="w-12 h-12 text-3xl border border-gray-300 rounded-md text-center focus:outline-none focus:border-blue-500"
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;