import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
`;

const SendOtpButton = styled.button`
  width: 228px;;
  height: 42px;
  padding: 10px 16px 10px 16px;
  gap: 10px;
  border-radius: 1000px ;
  opacity: 0px;
  background: #4C9EEB;
  display: flex;
  justify-content : center;
  align-items: center;
`;

const SendOtpButtonText = styled.p`
  width: 83px;
  height: 18px;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #FFFFFF;
  text-align : center;
`;



const VerifyOTPButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Container>
      <SendOtpButton onClick={onClick}>
        <SendOtpButtonText>Verify</SendOtpButtonText>
      </SendOtpButton>
    </Container>
  )
}

export default VerifyOTPButton