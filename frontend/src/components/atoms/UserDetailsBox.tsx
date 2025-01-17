import React from 'react'
import styled from "styled-components";

const InputBlock = styled.input<{
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
}>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  border-radius: 4px;
  border: 1px solid ${({ borderColor }) => borderColor || "#657786"};
  background: ${({ backgroundColor }) => backgroundColor || "#F5F8FA"};
  color: ${({ fontColor }) => fontColor || "#14171A"};
  padding: 20px 8px;
  font-family: Noto Sans;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  outline: none;
  box-sizing : border-box;

  ::placeholder {
    color: ${({ fontColor }) => fontColor || "#AABBCC"};
  }
`;

interface InputProps {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontWeight?: string;
  fontSize?: string;
};

const UserDetailsBox = (props: InputProps) => {
  return <InputBlock {...props} />;
};

export default UserDetailsBox;
