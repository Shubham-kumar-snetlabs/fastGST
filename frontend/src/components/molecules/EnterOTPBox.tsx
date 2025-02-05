import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import OTPBox from "../atoms/OTPBox";

const Container = styled.div<{ width?: string; height?: string }>`
  height: ${({ height }) => height || "110px"};
  width: ${({ width }) => width || "228px"};
  display: flex;
  justify-content: center;
`;

const BoxContainer = styled.div<{ gap?: string; padding?: string }>`
  display: flex;
  gap: ${({ gap }) => gap || "10px"};
  padding: ${({ padding }) => padding || "8px"};
`;

interface EnterOTPBoxProps {
  numInputs?: number;
  allowAlphanumeric?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  boxHeight?: string;
  boxWidth?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const EnterOTPBox: React.FC<EnterOTPBoxProps> = ({
  numInputs = 4,
  allowAlphanumeric = false,
  backgroundColor,
  gap ,
  padding,
  width,
  height ,
  boxHeight ,
  boxWidth,
  value = "",
  onChange,
}) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(numInputs).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    setOtpValues(value ? value.split("") : Array(numInputs).fill(""));
  }, [value, numInputs]);

  const handleInputChange = (char: string, index: number) => {
    if (!allowAlphanumeric && !/^\d*$/.test(char)) return;
    if (allowAlphanumeric && !/^[a-zA-Z0-9]$/.test(char)) return;

    const updatedOtp = [...otpValues];
    updatedOtp[index] = char;
    setOtpValues(updatedOtp);

    if (onChange) {
      onChange(updatedOtp.join(""));
    }

    if (char && index < numInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otpValues];
      if (updatedOtp[index] !== "") {
        updatedOtp[index] = "";
      } else if (index > 0) {
        updatedOtp[index - 1] = "";
        inputRefs.current[index - 1]?.focus();
      }
      setOtpValues(updatedOtp);
      if (onChange) {
        onChange(updatedOtp.join(""));
      }
    }
  };

  return (
    <Container width={width} height={height} >
      <BoxContainer gap={gap} padding={padding}>
        {Array.from({ length: numInputs }, (_, index) => (
          <OTPBox
            key={index}
            value={otpValues[index] || ""}
            onChange={(char) => handleInputChange(char, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputRef={(el) => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            allowAlphanumeric={allowAlphanumeric}
            borderColor={otpValues[index] ? "#4C9EEB" : "#657786"}
            backgroundColor={backgroundColor}
            height={boxHeight}
            width={boxWidth}
          />
        ))}
      </BoxContainer>
    </Container>
  );
};

export default EnterOTPBox;
