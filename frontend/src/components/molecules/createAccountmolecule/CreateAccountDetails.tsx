import React from 'react'
import styled from 'styled-components'
import SendOtpButtonComponent from '../../atoms/registerOTPatom/SendOtpButtonComponent';
import UserDetailsBox from '../../atoms/CreateAccountatom/UserDetailsBox';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    width :336px;
    height : 256px;
`;

const UserDetails = styled.div`
    width : 336px;
    height : 194px;
    display : flex;
    flex-direction : column;
    gap : 20px;
`;



const SendOTPButtonDiv = styled.div `
    width : 336px;
    height : 42px;
    position : relative;
    top : 53.5px;
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;



const CreateAccountDetails = () => {

    const navigate = useNavigate();

const handleSendOTPtoAadhar = ()=>{
    console.log('handleSendOTPtoAadhar');
    
    navigate('/verify-kyc')
}
  return (
    <Container>
        <UserDetails>
            <UserDetailsBox/>
        </UserDetails>
        <SendOTPButtonDiv>
            <SendOtpButtonComponent onClick={handleSendOTPtoAadhar}/>
        </SendOTPButtonDiv>
    </Container>
  )
}

export default CreateAccountDetails