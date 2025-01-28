import React from "react";
import styled from "styled-components";
import MultiFunctionButtonComponent from "../atoms/MultiFunctionButtonComponent";

const Container = styled.div<{ background: string }>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  z-index: 999;
`;

const MainContainer = styled.div<{ width: string; height: string; padding: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 12px;
  padding: ${({ padding }) => padding};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #f5f8fa;
`;

const AlertContainer = styled.div`
//   flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const SVGBox = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

const Title = styled.div<{ fontSize: string; fontWeight: string; color: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({color})=>color };
`;

const Description = styled.div<{ color: string; fontSize: string; lineHeight: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;



interface ButtonConfig {
  text: string;
  onClick: () => void;
  styles: {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    fontWeight?: string;
    fontSize?: string;
    fontFamily?: string;
    lineHeight?: string;
    padding?: string;
  };
}

interface ConfirmationModalProps {
  title?: string;
  description?: React.ReactElement;
  svgContent?: React.ReactNode;
  memberName?: string;

  containerStyles?: {
    width?: string;
    height?: string;
    padding?: string;
    background?: string;
  };

  titleStyles?: {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
  };

  descriptionStyles?: {
    color?: string;
    fontSize?: string;
    lineHeight?: string;
    width?: string;
  };

  buttons: ButtonConfig[];
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  svgContent,
  containerStyles = {},
  titleStyles = {},
  descriptionStyles = {},
  buttons,
}) => {
  return (
    <Container background={containerStyles.background || "#000000CC"}>
      <MainContainer
        width={containerStyles.width || "480px"}
        height={containerStyles.height || "320px"}
        padding={containerStyles.padding || "24px 36px"}
      >
        <AlertContainer>
          <SVGBox size="56px">{svgContent}</SVGBox>
          <TextContainer>
            <Title
              fontSize={titleStyles.fontSize || "18px"}
              fontWeight={titleStyles.fontWeight || "500"}
              color={titleStyles.color || '#14171A'}
            >
              {title}
            </Title>
            <Description
              color={descriptionStyles.color || "#657786"}
              fontSize={descriptionStyles.fontSize || "14px"}
              lineHeight={descriptionStyles.lineHeight || "18.9px"}
              
            >
              {description}
            </Description>
          </TextContainer>
        </AlertContainer>
        <ButtonContainer>
          {buttons.map((button, index) => (
            <MultiFunctionButtonComponent
              key={index}
              text={button.text}
              onClick={button.onClick}
              {...button.styles}
            />
          ))}
        </ButtonContainer>
      </MainContainer>
    </Container>
  );
};

export default ConfirmationModal;
