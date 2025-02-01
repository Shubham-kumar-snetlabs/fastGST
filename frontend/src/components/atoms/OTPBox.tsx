import React from "react";
import styled from "styled-components";

const Container = styled.div<{ borderColor?: string; backgroundColor?: string; height?: string; width?: string; padding?: string }>`
  height: ${({ height }) => height || "48px"};
  width: ${({ width }) => width || "48px"};
  border: 1px solid ${({ borderColor }) => borderColor || "#4C9EEB"};
  border-radius: 4px;
  padding: ${({ padding }) => padding || "8px"};
  box-sizing : border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
`;

const OTPNumberInput = styled.input<{ allowAlphanumeric: boolean }>`
  border: none;
  outline: none;
  background: transparent;


  font-family: Lato;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #4C9EEB;
  width: 100%;
  text-align: center;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  text-transform: uppercase;
`;

interface OTPBoxProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: (el: HTMLInputElement) => void;
  allowAlphanumeric: boolean;
  borderColor?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  padding?: string;
}

const OTPBox: React.FC<OTPBoxProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  allowAlphanumeric,
  borderColor,
  backgroundColor,
  height,
  width,
  padding,
}) => {
  return (
    <Container borderColor={borderColor} backgroundColor={backgroundColor} height={height} width={width} padding={padding}>
      <OTPNumberInput
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        ref={inputRef}
        allowAlphanumeric={allowAlphanumeric}
      />
    </Container>
  );
};

export default OTPBox;
