import styled from 'styled-components'
import TitleName from '../components/atoms/TitleName';
import { useNavigate } from 'react-router-dom';
import PhoneNumberComponent from '../components/atoms/PhoneNumberComponent';
import RegisterorLoginComponent from '../components/atoms/RegisterorLoginComponent';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import DescriptionComponent from '../components/atoms/DescriptionComponent';
import { signUpSVG } from '../svg/svg';

const Container = styled.div`
    min-height : 336px;
    min-width : 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FirstContainer = styled.div`
  width : auto;
  height : auto;
  min-width : 251px;
  min-height : 140px;
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
    margin-top : 32px;
`;

const RegisterComponent  = () => {

  const desc = 'You will receive a One-Time Password on your Phone to verify your Number.'

  const navigate = useNavigate()
  const handleSendOTP = ()=>{
    navigate('/verify-otp')
  }
  return (
    <Container>
        <FirstContainer>
          <TitleName svgContent = {signUpSVG} title=' Create an Account'/>
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
          <RegisterorLoginComponent text='Already a member?' registerOrLogin='Login'/>
          <DescriptionComponent desc={desc}/>
        </ThirdContainer>
    </Container>
  )
}

export default RegisterComponent