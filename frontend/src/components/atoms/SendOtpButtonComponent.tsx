import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const SendOtpButton = styled.button<{ width?: string }>`
  width: ${({ width }) => width || "336px"}; /* Dynamic width with default fallback */
  height: 42px;
  padding: 10px 16px;
  gap: 10px;
  border-radius: 1000px;
  background: #4c9eeb;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9; 
  }
`;

const SendOtpButtonText = styled.p`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  color: #ffffff;
`;

type SendOtpButtonComponentProps = {
  onClick: () => void;
  text: string;
  width?: string;
};

const SendOtpButtonComponent: React.FC<SendOtpButtonComponentProps> = ({
  onClick,
  text,
  width,
}) => {
  return (
    <Container>
      <SendOtpButton onClick={onClick} width={width}>
        <SendOtpButtonText>{text}</SendOtpButtonText>
      </SendOtpButton>
    </Container>
  );
};

export default SendOtpButtonComponent;
