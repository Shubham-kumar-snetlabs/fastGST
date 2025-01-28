import styled from 'styled-components'
import TitleName from '../components/atoms/TitleName';
import OtpDescriptionComponent from '../components/atoms/DescriptionComponent';
import { useNavigate } from 'react-router-dom';
import PhoneNumberComponent from '../components/molecules/PhoneNumberComponent';
import RegisterorLoginComponent from '../components/atoms/RegisterorLoginComponent';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { signUpSVG } from '../svg/svg';
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

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const FirstContainer = styled.div`
  width: 251px;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SecondContainer = styled.div`
  height: 116px;
  width: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ThirdContainer = styled.div`
  height: 70px;
  width: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Signin = () => {
  const desc =
    'You will receive a One-Time Password on your Phone to verify your Number.';

  const navigate = useNavigate();
  const handleSendOTP = () => {
    navigate('/verify-sign-in');
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <FixedLeftPage />
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <SignInContainer>
              <FirstContainer>
                <TitleName svgContent={signUpSVG} title="Sign In" />
              </FirstContainer>
              <SecondContainer>
                <PhoneNumberComponent />
                <MultiFunctionButtonComponent
                  onClick={handleSendOTP}
                  text="Send OTP"
                  width="336px"
                />
              </SecondContainer>
              <ThirdContainer>
                <RegisterorLoginComponent
                  text="Don't have an account?"
                  registerOrLogin="Register"
                />
                <OtpDescriptionComponent desc={desc} />
              </ThirdContainer>
            </SignInContainer>
          </InnerRightContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default Signin;
