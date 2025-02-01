import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MultiFunctionButtonComponent from "../atoms/MultiFunctionButtonComponent";
import MultiFunctionInputComponent from "../atoms/MultiFunctionInputComponent";

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

const UserDetailInputs = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [aadharInput, setAadharInput] = useState("");

  const handleSendOTP = ()=>{
    navigate('/verify-kyc')
  }

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only digits
    const value = e.target.value
    if (/^\d{0,12}$/.test(value)) {
      setAadharInput(value);
    }

  };
  return (
    <Container>
      <FirstContainer>
        <SecondContainer>
          <NameBlock>
            <MultiFunctionInputComponent
            type="text"
            placeholder="First Name"
            width="160px"
            height="54px"
            label="First Name"
            value= {firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <MultiFunctionInputComponent
              type="text"
              placeholder="Last Name"
              width="160px"
              height="54px"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </NameBlock>
          <EmailBlock>
            <MultiFunctionInputComponent 
            type="email"
            placeholder="Email (Optional)"
            width="336px"
            height="54px"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </EmailBlock>
          <AadharBlock>
            <MultiFunctionInputComponent 
            type="text"
            placeholder="Aadhar Number"
            width="336px"
            height="54px"
            label="Aadhar Number"
            value={aadharInput}
            onChange={handleAadharChange}
            />
          </AadharBlock>
          <MultiFunctionButtonComponent 
          text="Send OTP" 
          onClick={handleSendOTP} 
          width="336px"
          />
        </SecondContainer>
      </FirstContainer>
    </Container>
  );
};

export default UserDetailInputs;
