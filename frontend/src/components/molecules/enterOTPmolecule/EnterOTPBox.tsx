import React, { useRef, useState } from "react";
import styled from "styled-components";
import OTPBox from "../../atoms/OTPBox";

const Container = styled.div`
  height: 110px;
  width: 228px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BoxContainer = styled.div`
  height: 48px;
  width: 228px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;



const EnterOTPBox = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]); // State for OTP inputs
  const inputRefs = useRef<HTMLInputElement[]>([]); // Refs for each input

  const handleInputChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Ensure only digits are entered

    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);

    // Move focus to the next input box
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otpValues[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Container>
      <BoxContainer>
        {otpValues.map((value, index) => (
          <OTPBox
            key={index}
            value={value}
            onChange={(val: string) => handleInputChange(val, index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(e, index)
            }
            inputRef={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
          />
        ))}
      </BoxContainer>
    </Container>
  );
};

export default EnterOTPBox;
