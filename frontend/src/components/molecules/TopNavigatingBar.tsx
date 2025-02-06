import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backButtonSVG, tablePaginationNextNavSVG } from "../../svg/svg";
import React from "react";

const Navigator = styled.div`
  height: 24px;
  width: auto;
  display: flex;
  gap: 16px;
  position: relative;
  top: 12px;
  left: 12px;
  align-items: center;
  color: #14171a;
`;

const BackButtonDiv = styled.div`
  display: flex;
  gap: 16px;
  color: #657786;
`;

const BackButton = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const Seperator = styled.div`
  width: auto;
  height: fit-content;
  display: flex;
  align-items: center;

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
  width: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Text = styled.p`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: #14171a;
  cursor: pointer;
`;

const TopNavigatingBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get route segments
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const previousRoute =
    pathSegments.length > 1
      ? `/${pathSegments.slice(0, -1).join("/")}` // Navigate to the previous segment in the hierarchy
      : "/"; // Default to home if only one segment exists

  return (
    <Navigator>
      {pathSegments.length > 1 && (
        <BackButtonDiv>
          <BackButton onClick={() => navigate(previousRoute)}>
            {backButtonSVG}
          </BackButton>
          |
        </BackButtonDiv>
      )}
      <TextDiv>
        {pathSegments.map((segment, index) => {
          const routePath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={routePath}>
              {index > 0 && <Seperator>{tablePaginationNextNavSVG}</Seperator>}
              <Text onClick={() => navigate(routePath)}>
                {segment.replace(/\b\w/g, (char) => char.toUpperCase())}
              </Text>
            </React.Fragment>
          );
        })}
      </TextDiv>
    </Navigator>
  );
};

export default TopNavigatingBar;
