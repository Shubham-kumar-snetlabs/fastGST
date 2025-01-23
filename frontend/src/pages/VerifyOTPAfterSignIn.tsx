import styled from "styled-components";
import EnterOTPBox from "../components/molecules/enterOTPmolecule/EnterOTPBox";
import MultiFunctionButtonComponent from "../components/atoms/MultiFunctionButtonComponent";
import { useNavigate } from "react-router-dom";
import { usePhoneNumber } from "../contexts/PhoneNumberContext";
import TitleName from "../components/atoms/TitleName";
import OTPDescription from "../components/molecules/enterOTPmolecule/OTPDescription";
import { verifyOTPSVG } from "../svg/svg";


const Container = styled.div`
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

const VerifyOTPAfterSignIn = () => {
  const { phoneNumber } = usePhoneNumber();
  const description = "One Time Password has been sent to";


  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <TitleName svgContent={verifyOTPSVG} title="Verify OTP" />
      <OTPDescription description={description} phoneNumber={phoneNumber} />
      <EnterOTPBox />
      <ButtonContainer>
        <MultiFunctionButtonComponent onClick={handleVerifyOTP} text="Verify" width="228px" />
      </ButtonContainer>
    </Container>
  );
};

export default VerifyOTPAfterSignIn;




