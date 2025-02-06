import styled from "styled-components";
import TitleName from "../components/atoms/TitleName";
import DescriptionComponent from "../components/atoms/DescriptionComponent";
import UserDetailInputs from "../components/organism/UserDetailInputs";
import { CompleteProfileSVG } from "../svg/svg";
import FixedLeftPage from "./FixedLeftPage";

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
  height: 624px;
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
  color: #14171a;
`;

const CompleteProfileContainer = styled.div`
  height: 517px;
  width: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #14171a;
`;

const FirstContainer = styled.div`
  height: auto;
  width: auto;
`;

const SecondContainer = styled.div`
  height: 256px;
  width: 336px;
`;

const ThirdContainer = styled.div`
  height: 57px;
  width: 336px;
`;

// Component
const CompleteProfile = () => {
  const desc =
    "It’s mandatory to verify your KYC. This is a one-time process and won’t take more than 1 minute of your time.";

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <FixedLeftPage />
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <CompleteProfileContainer>
              <FirstContainer>
                <TitleName
                  svgContent={CompleteProfileSVG}
                  title="Complete Profile"
                  width="228px"
                  height="140px"
                  gap="16px"
                />
              </FirstContainer>

              <SecondContainer>
                <UserDetailInputs />
              </SecondContainer>

              <ThirdContainer>
                <DescriptionComponent desc={desc} />
              </ThirdContainer>
            </CompleteProfileContainer>
          </InnerRightContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default CompleteProfile;
