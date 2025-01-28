import React from "react";
import styled from "styled-components";
import {verticalLineSVG } from "../../svg/svg";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StepContainer = styled.div`
  width: 277px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: black;
  z-index: 999;
`;

const Step = styled.div`
  height: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StepText = styled.div`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #14171a;
`;

const VerticalLine = styled.div`
  height: 40px;
  display: flex;
`;

interface StepData {
  icon: React.ReactNode;
  text: string;
}

interface StepContainerProps {
  steps: StepData[];
  showVerticalLine?: boolean;
}

const StepContainerComponent: React.FC<StepContainerProps> = ({
  steps,
  showVerticalLine = true,
}) => {
  return (
    <Container>
      <StepContainer>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Step>
              {step.icon}
              <StepText>{step.text}</StepText>
            </Step>
              <VerticalLine>{showVerticalLine && index < 1 &&  verticalLineSVG}</VerticalLine>
          </React.Fragment>
        ))}
      </StepContainer>
    </Container>
  );
};

export default StepContainerComponent;
