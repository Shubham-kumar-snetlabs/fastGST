import React from "react";
import styled from "styled-components";
import { ClientIconSVG, TeamIconSVG } from "../../svg/svg";
import StepContainerComponent from "./StepContainerComponent";


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
  font-family: Noto Sans;
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
  font-family: Noto Sans;
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
  padding: 16px 16px;
  display: flex;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #aab8c2;
  box-shadow: 2px 2px 8px 2px #4c9eeb40;
`;

interface StepData {
  id: number;
  title: string;
}

interface DashBoardBodyProps {
  type: "team" | "client" | "task";
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const getStepsByType = (type: string): StepData[] => {
  switch (type) {
    case "team":
      return [
        { id: 1, title: "Download FastGST biz mobile App" },
        { id: 2, title: "Open App and go to Team" },
        { id: 3, title: "Select member from your contact list" },
        { id: 4, title: "Send invite" },
        { id: 5, title: "Wait for the invite acceptance" },
      ];
    case "client":
      return [
        { id: 1, title: "Download FastGST biz mobie App" },
        { id: 2, title: "Go to Clients" },
        {
          id: 3,
          title: "Select member from your contact list and add business",
        },
        { id: 4, title: "Send invite" },
        { id: 5, title: "Wait for the invite acceptance" },
      ];
    default:
      return [];
  }
};

const DashBoardBody: React.FC<DashBoardBodyProps> = ({
  type,
  currentStep,
  setCurrentStep,
}) => {
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
        <BodyDesciption>When you do, It’ll show up here.</BodyDesciption>
        <BodyContent>
          <StepContainerComponent
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </BodyContent>
      </BodyContentContainer>
    </InnerBodyContainer>
  );
};

export default DashBoardBody;
