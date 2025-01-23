
import styled from 'styled-components'
import EnterOTPBox from '../components/molecules/enterOTPmolecule/EnterOTPBox';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { useNavigate } from 'react-router-dom';
import TitleName from '../components/atoms/TitleName';
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


const VerifyKYC = () => {
 
  const description = 'One Time Password has been sent to your Adhaar linked mobile number.'

  const naviagte = useNavigate()

  const handleVerifyKYC = ()=>{
    naviagte('/sign-in')
  }
  return (
    <Container>
        <TitleName svgContent={verifyOTPSVG} title='KYC Verification'/>
        <OTPDescription description={description}/>
        <EnterOTPBox/>
        <ButtonContainer>
          <MultiFunctionButtonComponent 
          onClick={handleVerifyKYC} 
          text="Verify" 
          width='228px'
          />
      </ButtonContainer>
    </Container>
  )
}

export default VerifyKYC