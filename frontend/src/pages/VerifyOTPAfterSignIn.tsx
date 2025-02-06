import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePhoneNumber } from "../contexts/PhoneNumberContext";

import FixedLeftPage from "./FixedLeftPage";
import OTPModal from "./profile/OTPModal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #e0e0e0;
`;

const InnerContainer = styled.div`
  height: 640px;
  width: 964px;
  padding-top: 8px;
  padding-left: 8px;
  background: #f5f8fa;
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

const VerifyOTPAfterSignIn = () => {
  const { phoneNumber } = usePhoneNumber();

  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    navigate("/");
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <FixedLeftPage />
        </LeftContainer>
        <RightContainer>
          <OTPModal
            height="358px"
            width="336px"
            titleHeight="140px"
            titleWidth="217px"
            titleGap="16px"
            background="transparent"
            hasCloseButton={false}
            gap="32px"
            onVerify={handleVerifyOTP}
            title="OTP Verification"
            description="One Time Password has been sent to your"
            phoneNumber={phoneNumber}
            buttonText="Verify"
            initialTime={60}
            otpBoxProps={{
              numInputs: 4,
              otpWidth: "228px",
              otpHeight: "48px",
              otpGap: "8px",
              otpPadding: "0px",
              boxHeight: "48px",
              boxWidth: "48px",
            }}
          />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default VerifyOTPAfterSignIn;
