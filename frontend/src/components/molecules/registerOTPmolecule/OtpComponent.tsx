
import styled from "styled-components";
import PhoneNumberComponent from "../../atoms/PhoneNumberComponent";

const Container = styled.div`
  height: 116px;
  width: 336px;
  display: flex;
  justify-content: center;
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  width: 336px;
  height: 54px;
`;


const OtpComponent = () => {
  return (
    <Container>
      <FirstContainer>
        <PhoneNumberComponent />
      </FirstContainer>
    </Container>
  );
};

export default OtpComponent;
