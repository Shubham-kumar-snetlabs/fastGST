import React, { useState } from 'react'
import styled from 'styled-components'
import MultiFunctionButtonComponent from '../../components/atoms/MultiFunctionButtonComponent';
import MultiFunctionInputComponent from '../../components/atoms/MultiFunctionInputComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import { backButtonSVG } from '../../svg/svg';
import OTPModal from './OTPModal';

const Container = styled.div`
    display : flex;
    flex-direction : column;
    gap : 12px;
`;

const BackButtonDiv = styled.div`
    cursor : pointer;
`;

const FirstContainer = styled.div`
    width : 335px;
    height : 38px;
    border-radius : 4px;
    display : flex;
    // justify-content : space-between;
    align-items : center;
    gap : 10px;
    padding : 10px 8px;
    box-sizing : border-box;
    background : #E4F4FF;


    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;

`;

const SecondContainer = styled.div`
    width : 335px;
    height : 424px;
    padding : 0 8px;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;

const PhotoContainer = styled.div`
    width : 319px;
    height : 162px;
    display : flex;
    flex-direction : column;
    gap : 12px;
    align-items : center;
`;

const PhotoDiv = styled.div`
    width : 319px;
    height : 114px;
    display : flex;
    justify-content : center;
`;

const Photo = styled.img`
    width : 114.7px;
    height : 114px;
    border-radius : 1000px;
`;

const NameContainer = styled.div`
    width : 319px;
    height : 54px;
    display : flex;
    gap : 10px;
`;

const NumberComponent = styled.div`
  display: flex;
  gap : 10px;
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
  color : #14171A
`;

const EditProfile = () => {
    const navigate = useNavigate()

    const location = useLocation();
    const userProfile = location.state;

    // Split the name into first and last name
    const fullName = userProfile.name.split(" ");
    const initialFirstName = fullName[0] || "";  // First name
    const initialLastName = fullName[1];  // Last name

    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [email, setEmail] = useState(userProfile.email);
    const [phone, setPhone] = useState(userProfile.phoneNo);

    const[showOTPModal, setShowOTPModal] = useState(false)

    const [buttonText, setButtonText] = useState ('Save')

    const buttonAction = ()=>{
        setButtonText('Send OTP')
        if (buttonText === "Send OTP") {
            setShowOTPModal(true)
        }
    }
    
  return (
    <Container>
        
        <FirstContainer><BackButtonDiv onClick={()=>navigate('/profile/view-profile')}>{backButtonSVG}</BackButtonDiv>Edit Profile</FirstContainer>
        <SecondContainer>
            <PhotoContainer>
                <PhotoDiv><Photo  src={userProfile.photo} alt='My Photo'/></PhotoDiv>
                <MultiFunctionButtonComponent
                text='Edit Photo'
                width='111px'
                height='36px'
                gap='8px'
                borderRadius='100px'
                border='1px solid #4C9EEB'
                background='transparent'
                padding='8px 16px'
                color='#4C9EEB'
                />
            </PhotoContainer>
            <NameContainer>
                    <MultiFunctionInputComponent
                    placeholder='First Name'
                    label='First Name'
                    type='text'
                    width='154.5px'
                    value={firstName}
                    height='54px'
                    // borderColor='#4C9EEB'
                    onChange={(e)=>{setFirstName(e.target.value); setButtonText('Save')}}
                    />
                    <MultiFunctionInputComponent
                    placeholder='Last Name'
                    label='Last Name'
                    value={lastName}
                    type='text'
                    width='154.5px'
                    height='54px'
                    // borderColor='#4C9EEB'
                    onChange={(e)=>{setLastName(e.target.value); setButtonText('Save')}}
                    />
                </NameContainer>
                <MultiFunctionInputComponent
                    placeholder='Email'
                    label='Email'
                    value={email}
                    type='email'
                    width='319px'
                    height='54px'
                    // borderColor='#4C9EEB'
                    onChange={(e)=>{setEmail(e.target.value); setButtonText('Save')}}
                />
                <NumberComponent>
                <CountryCodeBlock>
                    <Country>Country</Country>
                    <CountryCode>+91</CountryCode>
                </CountryCodeBlock>
                <MultiFunctionInputComponent
                type='text'
                label='Phone Number'
                width='213px'
                value={phone}
                height='54px'
                onChange={(e)=> {setPhone(e.target.value); setButtonText('Save')}}
                />
                </NumberComponent>
                <MultiFunctionButtonComponent
                text={buttonText}
                width='319px'
                height='36px'
                borderRadius='1000px'
                padding='10px 16px'
                gap='10px'
                background='#4C9EEB'
                color='#FFFFFF'
                onClick={buttonAction}
                />
        </SecondContainer>
        {showOTPModal && <OTPModal phoneNumber={phone} setOTPModal={setShowOTPModal}/>}
    </Container>
  )
}

export default EditProfile