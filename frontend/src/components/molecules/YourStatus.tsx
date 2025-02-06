import styled from "styled-components";
import {
  ChatIconSVG,
  crossSVG,
} from "../../svg/svg";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleContainer = styled.div`
  width: 335px;
  height: 38px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  box-sizing: border-box;
  background: #e4f4ff;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #657786;
`;

const ContentContainer = styled.div`
  width: 335px;
  height: 96px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  gap: 24px;
`;

const ContentInnerContainer = styled.div`
  width: 303px;
  height: 64px;
  display: flex;
  justify-content: space-between;
`;

const ContentStatusInfoContainer = styled.div`
  width: 172px;
  height: 64px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const IconDiv = styled.div`
  height: 24px;
  width: 24px;
`;

const TitleDiv = styled.div`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const DurationDiv = styled.div`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const ClearContainer = styled.div`
  width: 39px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #eb5244;
`;

const YourStatus = () => {
  const location = useLocation();
  const statusData = location.state || {};
  return (
    <Container>
      <TitleContainer>
        Your Status
        {crossSVG}
      </TitleContainer>
      <ContentContainer>
        <ContentInnerContainer>
          <ContentStatusInfoContainer>
            <IconDiv>{ChatIconSVG}</IconDiv>
            <TitleDiv>{statusData.statusText}</TitleDiv>
            <DurationDiv>{statusData.duration}</DurationDiv>
          </ContentStatusInfoContainer>
          <ClearContainer>Clear</ClearContainer>
        </ContentInnerContainer>
      </ContentContainer>
    </Container>
  );
};

export default YourStatus;
