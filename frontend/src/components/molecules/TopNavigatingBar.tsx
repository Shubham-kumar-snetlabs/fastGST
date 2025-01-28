import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backButtonSVG, tablePaginationNextNavSVG } from "../../svg/svg";

const Navigator = styled.div`
  height: 24px;
  width: 245px;
  display: flex;
  gap: 16px;
  position: relative;
  top: 12px;
  left: 24px;
  align-items: center;
  color: #14171a;
`;

const BackButton = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const Pipe = styled.div`
  width: 7px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const TextDiv = styled.div`
  height: 20px;
  width: 100%;
  min-width: 52px;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  width: 37px;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const ExtendedRoutesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items : center;
`;

const RouteExtenderSVG = styled.div`
  display: flex;
  align-items: center;
`;

const ExtendedRoutesText = styled.div`
  width: 89px;
  height: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const TopNavigatingBar = ({
  showBackButton = true,
  backButtonAction = () => {},
  mainText = "Teams",
  showExtendedRoutes = true,
  extendedRouteText = "",
}: {
  showBackButton?: boolean;
  backButtonAction?: () => void;
  mainText?: string;
  showExtendedRoutes?: boolean;
  extendedRouteText?: string;
}) => {

  return (
    <Navigator>
      {showBackButton && (
        <BackButton onClick={backButtonAction}>{backButtonSVG}</BackButton>
      )}
      {showBackButton && <Pipe>|</Pipe>}
      <TextDiv>
        <Text>{mainText}</Text>
      </TextDiv>
      {showExtendedRoutes && (
        <ExtendedRoutesContainer>
          <RouteExtenderSVG>{tablePaginationNextNavSVG}</RouteExtenderSVG>
          <ExtendedRoutesText>{extendedRouteText}</ExtendedRoutesText>
        </ExtendedRoutesContainer>
      )}
    </Navigator>
  );
};

export default TopNavigatingBar;
