import React, { useRef, useState } from "react";
import styled from "styled-components";
import SendOtpButtonComponent from "../../atoms/registerOTPatom/SendOtpButtonComponent";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 116px;
  width: 336px;
  display: flex;
  justify-content: center;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  width: 336px;
  height: 54px;
`;

const NumberComponent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountryCodeBlock = styled.div`
  width: 96px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid #657786;
  background: #e1e8ed;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;
`;

const Country = styled.div`
  width: 50px;
  height: 14px;
  color: #4c9eeb;
  position: relative;
  top: 8px;
  left: 8px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
`;

const CountryCode = styled.div`
  width: 26px;
  height: 16px;
  position: relative;
  top: 11px;
  left: 11px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
`;

const PhoneNumberBlock = styled.div`
  position: relative; 
  width: 230px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid #657786;
  background: #e1e8ed;
`;

const PhoneNumberBlockContent = styled.div`
  width: 115px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #657786;
  padding: 0 0 0 8px;
`;

const PhoneNumberInput = styled.input`
  position: relative;
  top: 12px;
  border: none;
  outline: none;
  background: transparent;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #14171a;
  padding: 12px 0 0 2px;

  ::placeholder {
    color: #aabbc2;
  }
`;

const PhoneNumberWrittenTextAfterInput = styled.p<{ show: boolean }>`
  position: absolute; /* Positioned above the input */
  top: 8px;
  left: 8px;
  width: 214px;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #4c9eeb;
  margin: 0px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const OtpComponent = () => {
  const [phoneNumberBlockText, setPhoneNumberBlockContent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlockClick = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 characters
    }
    e.target.value = value;
    setPhoneNumberBlockContent(value.length > 0);
  };


  const navigate = useNavigate();

  const handleSendOTP = ()=>{
    navigate('/verify')
  }

  return (
    <Container>
      <FirstContainer>
        <NumberComponent>
          <CountryCodeBlock>
            <Country>Country</Country>
            <CountryCode>+91</CountryCode>
          </CountryCodeBlock>
          <PhoneNumberBlock onClick={handleBlockClick}>
            <PhoneNumberWrittenTextAfterInput show={phoneNumberBlockText}>
              Phone Number
            </PhoneNumberWrittenTextAfterInput>
            <PhoneNumberBlockContent>
              <PhoneNumberInput
                ref={inputRef}
                type="text"
                placeholder="Phone Number"
                onChange={handleInputChange}
              />
            </PhoneNumberBlockContent>
          </PhoneNumberBlock>
        </NumberComponent>
        <SendOtpButtonComponent onClick={handleSendOTP}/>
      </FirstContainer>
    </Container>
  );
};

export default OtpComponent;
