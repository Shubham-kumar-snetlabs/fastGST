import React from 'react'
import styled from 'styled-components'
import OTPBox from '../../atoms/enterOTPatom/OTPBox';
import { useNavigate } from 'react-router-dom';
import VerifyOTPButton from '../../atoms/enterOTPatom/VerifyOTPButton';


const Container = styled.div`
    height : 110px;
    width : 228px;
    display : flex;
    flex-direction : column;
    gap : 20px;
`;

const BoxContainer = styled.div`
    height : 48px;
    width : 228px;
    border-radius : 4px;
    display : flex;
    justify-content : space-between;
`;


const ButtonContainer = styled.div`
    height : 42px;
    width : 228px;
    border-radius : 1000px;
`;

const EnterOTPBox = () => {

    const navigate = useNavigate()

    const handleVerifyOTP = ()=>{
        navigate('/create-account')
    }
  return (
    <Container>
        <BoxContainer>
            <OTPBox/>
            <OTPBox/>
            <OTPBox/>
            <OTPBox/>
        </BoxContainer>
        <ButtonContainer>
            < VerifyOTPButton onClick={handleVerifyOTP}/>
        </ButtonContainer>
    </Container>
  )
}

export default EnterOTPBox