import styled from 'styled-components';
import TitleName from '../../components/atoms/TitleName';
import { ClockIconSVG, crossSVG, verifyOTPSVG } from '../../svg/svg';
import EnterOTPBox from '../../components/molecules/EnterOTPBox';
import MultiFunctionButtonComponent from '../../components/atoms/MultiFunctionButtonComponent';
import { useState } from 'react';
import Timer from '../../components/atoms/Timer';



const ModalWrapper = styled.div<{ 
  background?: string; 
  height? : string; 
  width? : string; 
  padding? : string;

}>`
  height:  ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  background:  ${({ background }) => background || '#FFFFFF'};
  color: #14171A;
  border-radius: 12px;
  padding: ${({padding}) => padding || '20px'};
  box-sizing: border-box;
`;

const CloseButton = styled.div`
  width: fit-content;
  position : relative;
  top : 0;
  left : 310px;
  cursor: pointer;
`;

const ContentContainer = styled.div<{gap? : string;}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({gap}) => gap || '16px'};
`;

const OTPDescriptionDiv = styled.div`
  width : 335px;
  height : 44px;
  gap : 16px;


  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;




const OTPButtonandTimerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width : 228px;
  height : 166px;
  gap : 20px;
`;

const ResendDiv = styled.div`
  width : 100%;
  height : 16px;
  display : flex;
  gap : 8px;
  justify-content : center;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;


const Resend = styled.div<{ timeLeft: number }>`
  color: ${({ timeLeft }) => (timeLeft === 0 ? "#4C9EEB" : "#B9DCF7")};
  cursor: ${({ timeLeft }) => (timeLeft === 0 ? "pointer" : "default")};
`;

interface OTPModalProps {
  height? : string;
  width? : string;
  titleHeight? : string;
  titleWidth? : string;
  background? : string;
  gap? : string;
  titleGap? : string;
  padding?: string;
  phoneNumber?: string;
  onClose?: () => void;
  onVerify?: () => void;
  title?: string;
  description?: string ;
  buttonText?: string;
  initialTime?: number;
  hasCloseButton? : boolean;

  otpBoxProps?: {
    numInputs?: number;
    otpWidth?: string;
    otpHeight?: string;
    otpGap?: string;
    otpPadding?: string;
    boxHeight?: string;
    boxWidth?: string;
  };
}

const OTPModal: React.FC<OTPModalProps> = ({
  height,
  width,
  titleHeight,
  titleWidth,
  background ,
  gap,
  phoneNumber,
  hasCloseButton = false,
  titleGap,
  padding,
  onClose,
  onVerify,
  title = "OTP Verification",
  description,
  buttonText = "Verify",
  initialTime = 60,
  otpBoxProps = {}
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  return (

      
      <ModalWrapper height={height} width={width} background={background} padding={padding}>
        {hasCloseButton && <CloseButton onClick={onClose}>{crossSVG}</CloseButton>}
        <ContentContainer gap={gap}>
          <TitleName svgContent={verifyOTPSVG} title={title} height={titleHeight} width={titleWidth} gap={titleGap} />

          <OTPDescriptionDiv>
            {description} 
            {phoneNumber ? 
            <div style={{color : '#4C9EEB'}}> +91-{phoneNumber}</div> 
            : 
            ' your Aadhar linked mobile number.'}
          </OTPDescriptionDiv>

          <OTPButtonandTimerDiv>
            <EnterOTPBox 
              width={otpBoxProps?.otpWidth} 
              height={otpBoxProps?.otpHeight} 
              gap={otpBoxProps?.otpGap} 
              padding={otpBoxProps?.otpPadding}
              boxHeight={otpBoxProps?.boxHeight}
              boxWidth={otpBoxProps?.boxWidth}
              numInputs={otpBoxProps?.numInputs}
            />
            <MultiFunctionButtonComponent onClick={onVerify} text={buttonText} width="228px" />
            <Timer
            initialTime={timeLeft}
            svgIcon = {ClockIconSVG}
            />
            <ResendDiv>Didn’t received?{" "} <Resend timeLeft={timeLeft} onClick={()=>setTimeLeft(60)}>Resend</Resend></ResendDiv>
          </OTPButtonandTimerDiv>
        </ContentContainer>
      </ModalWrapper>

  );
};

export default OTPModal;