import styled from 'styled-components'

import TitleName from '../components/atoms/TitleName';
import EnterOTPBox from '../components/molecules/enterOTPmolecule/EnterOTPBox';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { useNavigate } from 'react-router-dom';
import { usePhoneNumber } from '../contexts/PhoneNumberContext';
import OTPDescription from '../components/molecules/enterOTPmolecule/OTPDescription';
import { verifyOTPSVG } from '../svg/svg';


const Container = styled.div`
    height : 358px;
    width : 336px;
    display : flex;
    gap: 16px;
    flex-direction : column;
    align-items: center;
`;

const ButtonContainer = styled.div`
  height: 42px;
  width: 228px;
  border-radius: 1000px;
  display : flex;
  justify-content : center;
`;



const VerifyOTPAfterCreationComponent = () => {
  const { phoneNumber , setPhoneNumber} = usePhoneNumber();


  const description = 'One Time Password has been sent to'
  
  const navigate = useNavigate()

  const handleVerifyOTP = () => {
    setPhoneNumber('')
    navigate("/create-account");
  };
  return (
    <Container>
        <TitleName svgContent={verifyOTPSVG} title='OTP Verification'/>
        <OTPDescription description={description} phoneNumber={phoneNumber}/>
        <EnterOTPBox/>
        <ButtonContainer>
          <MultiFunctionButtonComponent
           onClick={handleVerifyOTP} 
           text="Verify" 
           width='228px'/>
      </ButtonContainer>
    </Container>
  )
}

export default VerifyOTPAfterCreationComponent