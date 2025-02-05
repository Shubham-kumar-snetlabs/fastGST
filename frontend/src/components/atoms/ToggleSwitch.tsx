import { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const Switch = styled.div<{ isOn: boolean }>`
  width: 32px;
  height: 16px;
  background: ${({ isOn }) => (isOn ? "#4C9EEB" : "transparent")};
  border : 2px solid #4C9EEB;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 3px;
  position: relative;
  transition: background 0.3s;
`;

const Knob = styled.div<{ isOn: boolean }>`
  width: 15px;
  height: 15px;
  background: white;
   border : 2px solid #4C9EEB;
  border-radius: 50%;
  position: absolute;
  left: ${({ isOn }) => (isOn ? "calc(100% - 20px)" : "3px")};
  transition: left 0.3s;
`;

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <ToggleContainer onClick={() => setIsOn(!isOn)}>
      <Switch isOn={isOn}>
        <Knob isOn={isOn} />
      </Switch>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
