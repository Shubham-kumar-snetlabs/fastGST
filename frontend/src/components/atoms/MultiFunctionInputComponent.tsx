import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius? : string;
  fontWeight? : string;
  lineHeight? : string
  }>`
  position: relative; 
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  border: 1px solid ${({ border }) => (border ? 'border' : '#657786')};
  background: ${({backgroundColor}) => backgroundColor || 'transparent'};
  display: flex; 
  flex-direction : column;
  justify-content : center; 
`;


const WrittenTextAfterInput = styled.p<{ show: boolean }>`
  position: relative; 
  top: 10px;
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
  borderRadius? : string;
  fontWeight? : string;
  lineHeight? : string
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
  line-height: ${({ lineHeight }) => lineHeight || '16px'};
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
  onChange: (value: string) => void;
}

interface UserDetailsBoxProps extends InputProps {
  label: string; // To display label for each input block
  value: string;
  onChange: (value: string) => void; // Callback for change in the input value
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
}: UserDetailsBoxProps) => {
  const [blockText, setBlockContent] = useState(false); // For showing the placeholder at top
  const inputRef = useRef<HTMLInputElement>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlockContent(true);
    let inputValue = e.target.value;

    if (type === "phone" && inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10); // Limiting phone number to 10 digits
    }

    setBlockContent(inputValue.length > 0); // Show label at top when user starts typing
    onChange(inputValue); // Pass the input value back to the parent component
  };

  return (
    <InputContainer
      
      width={width}
    >
      <WrittenTextAfterInput show={blockText}>
        {label} 
      </WrittenTextAfterInput>
      <InputBlock
        ref={inputRef}
        type={type === "phone" ? "tel" : type} // Use 'tel' for phone input
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
