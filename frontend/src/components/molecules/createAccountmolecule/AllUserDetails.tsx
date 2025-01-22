
import React, { useState } from "react";
import UserDetailsBox from "../../atoms/UserDetailsBox";
import styled from "styled-components";
import SendOtpButtonComponent from "../../atoms/SendOtpButtonComponent";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width : 336px;
  height : 256px;
  display : flex;
  flex-direction : column;
`;

const FirstContainer = styled.div`
  width : 336px;
  height : 194px;
  font-family: Noto Sans;
  display : flex;
  flex-direction : column;
`;

const NameBlock = styled.div`
  display : flex;
  gap : 16px;
`;

const SecondContainer = styled.div`
  width : 336px;
  height : 54px;
  display : flex;
  gap : 16px;
  flex-direction : column;
`;


const EmailBlock = styled.div`

`;

const AadharBlock = styled.div`

`;

const AllUserDetails = () => {
  const navigate = useNavigate()

  const [aadharInput , setAadharInput] = useState('')

  const handleSendOTP = ()=>{
    navigate('/verify-kyc')
  }

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits
    if (/^\d{0,12}$/.test(value)) {
      setAadharInput(value);
    }

  };
  return (
    <Container>
      <FirstContainer>
        <SecondContainer>
          <NameBlock>
            <UserDetailsBox
            type="text"
            placeholder="First Name"
            width="160px"
            height="54px"
            />
            <UserDetailsBox
              type="text"
              placeholder="Last Name"
              width="160px"
              height="54px"
            />
          </NameBlock>
          <EmailBlock>
            <UserDetailsBox 
            type="email"
            placeholder="Email (Optional)"
            width="336px"
            height="54px"
            />
          </EmailBlock>
          <AadharBlock>
            <UserDetailsBox 
            type="text"
            placeholder="Aadhar Number"
            width="336px"
            height="54px"
            value={aadharInput}
            onChange={handleAadharChange}
            />
          </AadharBlock>
          <SendOtpButtonComponent text="Send OTP" onClick={handleSendOTP} />
        </SecondContainer>
      </FirstContainer>
    </Container>
  );
};

export default AllUserDetails;
