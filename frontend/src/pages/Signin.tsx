import styled from 'styled-components'
import TitleName from '../components/atoms/TitleName';
import OtpDescriptionComponent from '../components/atoms/DescriptionComponent';
import { useNavigate } from 'react-router-dom';
import PhoneNumberComponent from '../components/atoms/PhoneNumberComponent';
import RegisterorLoginComponent from '../components/atoms/RegisterorLoginComponent';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { signUpSVG } from '../svg/svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 32px;
`;

const FirstContainer = styled.div`
  width : 251px;
  height : 140px;
  display : flex;
  flex-direction : column;
  gap : 16px;
`

const SecondContainer = styled.div`
    height: 116px;
    width: 336px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const ThirdContainer = styled.div`
    height: 70px;
    width: 336px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

const Signin = () => {
  
  const desc = 'You will receive a One-Time Password on your Phone to verify your Number.'

  const navigate = useNavigate()
  const handleSendOTP = ()=>{
    navigate('/verify-sign-in')
  }
  return (
    <Container>
        <FirstContainer>
          <TitleName svgContent = {signUpSVG} title=' Sign In'/>
        </FirstContainer>
        <SecondContainer>
          <PhoneNumberComponent/>
          <MultiFunctionButtonComponent 
          onClick={handleSendOTP} 
          text = 'Send OTP'
          width='336px'
          />
        </SecondContainer>
        <ThirdContainer>
          <RegisterorLoginComponent text='Dont have an account?' registerOrLogin='Register'/>
          <OtpDescriptionComponent desc={desc}/>
        </ThirdContainer>
    </Container>
  )
}

export default Signin