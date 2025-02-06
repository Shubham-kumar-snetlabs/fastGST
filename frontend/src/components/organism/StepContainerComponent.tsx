import React from "react";
import { Steps } from "antd";

interface StepData {
  title: string;
}

interface StepContainerProps {
  steps: StepData[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepContainerComponent: React.FC<StepContainerProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => (
  <Steps
    direction="vertical"
    size="small"
    current={currentStep}
    items={steps.map((step) => ({ title: step.title }))}
    onChange={(step) => setCurrentStep(step)}
  />
);

export default StepContainerComponent;
