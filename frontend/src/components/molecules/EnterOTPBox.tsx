import React, { useRef, useState } from "react";
import styled from "styled-components";
import OTPBox from "../atoms/OTPBox";

// Styled components now correctly accept and apply props
const Container = styled.div<{ width?: string; height?: string }>`
  height: ${({ height }) => height || "110px"};
  width: ${({ width }) => width || "228px"};
  display: flex;
  justify-content : center;
`;

const BoxContainer = styled.div<{ boxHeight?: string; boxWidth?: string; gap?: string; padding?: string }>`
  display: flex;
  gap: ${({ gap }) => gap || "10px"};
  padding: ${({ padding }) => padding || "8px"};
`;

interface EnterOTPBoxProps {
  numInputs?: number; // Number of OTP inputs
  allowAlphanumeric?: boolean; // Allow alphanumeric characters
  borderColor?: string; // Custom border color
  backgroundColor?: string; // Custom background color
  gap?: string; // Custom gap between boxes
  padding?: string; // Padding inside the OTP box
  width?: string; // Width of OTP container
  height?: string; // Height of OTP container
  boxHeight?: string; // Height of each OTP box
  boxWidth?: string; // Width of each OTP box
}

const EnterOTPBox: React.FC<EnterOTPBoxProps> = ({
  numInputs = 4,
  allowAlphanumeric = false,
  borderColor,
  backgroundColor,
  gap = "10px",
  padding = "8px",
  width = "228px",
  height = "110px",
  boxHeight = "48px",
  boxWidth = "48px",
}) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(numInputs).fill('')); // State for OTP inputs
  const inputRefs = useRef<HTMLInputElement[]>([]); // Refs for each input

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handle input change
  const handleInputChange = (value: string, index: number) => {
    if (!allowAlphanumeric && !/^\d*$/.test(value)) return; // Only digits if alphanumeric is not allowed
    if (allowAlphanumeric && !/^[a-zA-Z0-9]$/.test(value)) return; // Only alphanumeric if allowed
    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);
    
    // Move focus to the next input
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
  if (e.key === "Backspace") {
    const updatedOtp = [...otpValues];

    if (updatedOtp[index] !== "") {
      // Clear the current input first
      updatedOtp[index] = "";
      setOtpValues(updatedOtp);
    } else if (index > 0) {
      // If current box is empty, move to the previous one
      inputRefs.current[index - 1].focus();
    }
  }
};


  return (
    <Container width={width} height={height}>
      <BoxContainer gap={gap} padding={padding}>
        {otpValues.map((value, index) => (
          <OTPBox
            key={index}
            value={value}
            onChange={(val: string) => handleInputChange(val, index)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(e, index)
            }
            inputRef={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
            allowAlphanumeric={allowAlphanumeric}
            borderColor={value || activeIndex === index ? "#4C9EEB" : "#657786"}
            backgroundColor={backgroundColor}
            height={boxHeight}
            width={boxWidth}
            padding={padding}
          />
        ))}
      </BoxContainer>
    </Container>
  );
};

export default EnterOTPBox;
