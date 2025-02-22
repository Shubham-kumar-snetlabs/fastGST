import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  fontWeight?: string;
  lineHeight?: string;
}>`
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  border: 1px solid ${({ border }) => (border ? border : "#657786")};
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrittenTextAfterInput = styled.p<{ show: boolean | string }>`
  position: relative;
  top: 9px;
  left: 8px;
  width: auto;
  height: auto;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #4c9eeb;
  margin: 2px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const InputBlock = styled.input<{
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  fontWeight?: string;
  lineHeight?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  color: ${({ fontColor }) => fontColor || "#14171A"};
  padding: ${({ padding }) => padding || "8px"};
  box-sizing: border-box;
  font-family: Noto Sans;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ lineHeight }) => lineHeight || "16px"};
  text-align: left;
  outline: none;

  ::placeholder {
    color: ${({ fontColor }) => fontColor || "#AABBCC"};
  }
`;

interface InputProps {
  type?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const MultiFunctionInputComponent = ({
  label,
  type,
  placeholder,
  width,
  height,
  borderColor,
  backgroundColor,
  fontColor,
  fontSize,
  value,
  onChange,
}: InputProps) => {
  const [blockText, setBlockContent] = useState<boolean | string>(
    value ? value : false
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && value.trim() !== "") {
      setBlockContent(true);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (type === "phone" && inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }

    setBlockContent(inputValue.length > 0);
    onChange(e);
  };

  return (
    <InputContainer width={width}>
      <WrittenTextAfterInput show={blockText}>{label}</WrittenTextAfterInput>
      <InputBlock
        ref={inputRef}
        type={type === "phone" ? "tel" : type}
        placeholder={placeholder || label}
        width={width}
        height={height}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        fontSize={fontSize}
        value={value}
        onChange={handleInputChange}
      />
    </InputContainer>
  );
};

export default MultiFunctionInputComponent;
