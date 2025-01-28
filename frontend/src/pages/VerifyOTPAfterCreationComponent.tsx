import styled from 'styled-components';

import TitleName from '../components/atoms/TitleName';
import EnterOTPBox from '../components/molecules/EnterOTPBox';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { useNavigate } from 'react-router-dom';
import { usePhoneNumber } from '../contexts/PhoneNumberContext';
import OTPDescription from '../components/molecules/OTPDescription';
import { verifyOTPSVG } from '../svg/svg';
import FixedLeftPage from './FixedLeftPage';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #E0E0E0;
`;

const InnerContainer = styled.div`
  height: 640px;
  width: 964px;
  padding-top: 8px;
  padding-left: 8px;
  background: #F5F8FA;
  display: flex;
  border-radius: 8px;
  gap: 2px;
`;

const LeftContainer = styled.div`
  display: flex;
  height: 630px;
  width: 484px;
  background: #4c9eeb;
  border-radius: 8px;
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
  background: transparent;
  height: 630px;
  width: 464px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerRightContainer = styled.div`
  height: 630px;
  width: 464px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #14171A;
`;

const OTPContainer = styled.div`
  height: 358px;
  width: 336px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  height: 42px;
  width: 228px;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
`;

const VerifyOTPAfterCreationComponent = () => {
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();

  const description = 'One Time Password has been sent to';

  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    setPhoneNumber('');
    navigate('/create-account');
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <FixedLeftPage />
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <OTPContainer>
              <TitleName svgContent={verifyOTPSVG} title="OTP Verification" />
              <OTPDescription description={description} phoneNumber={phoneNumber} />
              <EnterOTPBox />
              <ButtonContainer>
                <MultiFunctionButtonComponent
                  onClick={handleVerifyOTP}
                  text="Verify"
                  width="228px"
                />
              </ButtonContainer>
            </OTPContainer>
          </InnerRightContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default VerifyOTPAfterCreationComponent;
