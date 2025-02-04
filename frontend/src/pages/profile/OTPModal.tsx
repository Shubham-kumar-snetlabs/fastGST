import styled from 'styled-components';
import TitleName from '../../components/atoms/TitleName';
import { ClockIconSVG, crossSVG, verifyOTPSVG } from '../../svg/svg';
import OTPDescription from '../../components/molecules/OTPDescription';
import EnterOTPBox from '../../components/molecules/EnterOTPBox';
import MultiFunctionButtonComponent from '../../components/atoms/MultiFunctionButtonComponent';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Timer from '../../components/atoms/Timer';


const Container = styled.div<{ background: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  z-index: 999;
`;

const MainContainer = styled.div`
  flex: 1;
  background: transparent;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  height: auto;
  width: auto;
  background: #FFFFFF;
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  color: #14171A;
  border-radius : 12px;
  padding : 20px;
  box-sizing : border-box;
  gap : 20px;
`;
const CrossDiv = styled.div`
    width : 100%;
    height : auto;
    cursor : pointer;
    display : flex;
    justify-content : flex-end;
`;

const ContentContainer = styled.div`
  height: 358px;
  width: 336px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

const OTPandButtonDiv = styled.div`
  height: 110px;
  width : 228px;
  display : flex;
  flex-direction : column;
  gap : 20px;
`;



const ResendDiv = styled.div`
  width : 100%
  height : 16px;
  display : flex;
  gap : 8px;
  justif-content : center;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;

interface OTPModalProps{
  phoneNumber : string;
  setOTPModal : React.Dispatch<React.SetStateAction<boolean>>
}

const Resend = styled.div<{ timeLeft: number }>`
  color: ${({ timeLeft }) => (timeLeft === 0 ? "#4C9EEB" : "#B9DCF7")};
  cursor: ${({ timeLeft }) => (timeLeft === 0 ? "pointer" : "default")};
`;


const OTPModal: React.FC<OTPModalProps> = ({phoneNumber,setOTPModal}) => {
    const navigate = useNavigate();

  const handleVerifyKYC = () => {
    navigate('/');
  }

   const [timeLeft, setTimeLeft] = useState(60);
     const OTPDescr = <>One Time Password has been sent to <div style={{color : '#4C9EEB'}}>+91-{phoneNumber}</div> .</>
  
  return (
    <Container background='#000000CC'>
        <MainContainer>
          <InnerContainer>
          <CrossDiv onClick={()=>setOTPModal(false)}>{crossSVG}</CrossDiv>
            <ContentContainer>
              <TitleName svgContent={verifyOTPSVG} title="OTP Verification" />
              <OTPDescription description = {OTPDescr}/>
              <OTPandButtonDiv>
              <EnterOTPBox
                width='228px'
                height='48px'
                gap='8px'
                padding='8px'
                boxHeight='48px'
                boxWidth='48px'
              />
              <MultiFunctionButtonComponent
                onClick={handleVerifyKYC}
                text="Verify"
                width="228px"
              />
              </OTPandButtonDiv>

            </ContentContainer>
            
            
          </InnerContainer>
        </MainContainer>
    </Container>
  )
}

export default OTPModal









