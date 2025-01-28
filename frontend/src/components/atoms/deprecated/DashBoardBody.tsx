import React from "react";
import styled from "styled-components";
import { 
  ClientIconSVG,
  number2SVG, 
  number3SVG, 
  number4SVG, 
  number5SVG, 
  TeamIconSVG, 
  tickSVG 
} from "../../../svg/svg";
import StepContainerComponent from "../../organism/StepContainerComponent";

const InnerBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 545px;
  min-width: 316px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const InnerBodyIconContainer = styled.div`
  height: 48px;
  width: 48px;
`;

const BodyContentContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 485px;
  min-width: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const BodyTitle = styled.div`
  height: 44px;
  width: 316px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.15px;
  text-align: center;
  color: #14171a;
`;

const BodyDesciption = styled.div`
  width: 100%;
  min-width: 316px;
  height: 17px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.15px;
  text-align: center;
  color: #657786;
`;

const BodyContent = styled.div`
  width: 316px;
  height: 376px;
  padding: 16px 0px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #aab8c2;
  box-shadow: 2px 2px 8px 2px #4c9eeb40;
`;

interface StepData {
  icon: React.ReactNode;
  text: string;
}

interface DashBoardBodyProps {
  type: "team" | "client" | "task"; // Add more types as needed
}

const getStepsByType = (type: string): StepData[] => {
  switch (type) {
    case "team":
      return [
        { icon: tickSVG, text: "Download FastGST biz mobile App" },
        { icon: number2SVG, text: "Open App and go to Team" },
        { icon: number3SVG, text: "Select member from your contact list" },
        { icon: number4SVG, text: "Send invite" },
        { icon: number5SVG, text: "Wait for the invite acceptance" },
      ];
    case "client":
      return [
        { icon: tickSVG, text: "Download FastGST biz mobie App" },
        { icon: number2SVG, text: "Go to Clients" },
        { icon: number3SVG, text: "Select member from your contact list and add business" },
        { icon: number4SVG, text: "Send invite" },
        { icon: number5SVG, text: "Wait for the invite acceptance" },
      ];
    default:
      return [];
  }
};

const DashBoardBody: React.FC<DashBoardBodyProps> = ({ type }) => {
  const steps = getStepsByType(type);

  return (
    <InnerBodyContainer>
      <InnerBodyIconContainer>
      {type === "team" && TeamIconSVG}
      {type === "client" && ClientIconSVG}
      </InnerBodyIconContainer>
      <BodyContentContainer>
        <BodyTitle>
          {type === "team" && "You have not added any member in your Team."}
          {type === "client" && "You have not added any client till now."}
        </BodyTitle>
        <BodyDesciption>
        When you do, It’ll show up here.
        </BodyDesciption>
        <BodyContent>
          <StepContainerComponent steps={steps} showVerticalLine={true} />
        </BodyContent>
      </BodyContentContainer>
    </InnerBodyContainer>
  );
};

export default DashBoardBody;
