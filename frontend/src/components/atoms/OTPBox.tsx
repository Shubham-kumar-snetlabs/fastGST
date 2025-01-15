import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid #4C9EEB;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OTPNumberInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #14171a;
  width: 100%;
  text-align: center;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface OTPBoxProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: (el: HTMLInputElement) => void;
}

const OTPBox: React.FC<OTPBoxProps> = ({ value, onChange, onKeyDown, inputRef }) => {
  return (
    <Container>
      <OTPNumberInput
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
    </Container>
  );
};

export default OTPBox;
