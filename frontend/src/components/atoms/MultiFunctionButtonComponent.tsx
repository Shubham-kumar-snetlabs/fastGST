import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Button = styled.button<{
  width?: string;
  height?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  padding? : string;
  gap?: string;
  flexDirection?: string;
}>`
  width: ${({ width }) => width || "max-content"};
  height: ${({ height }) => height || "42px"};
  padding: ${({padding})=> padding || '10px 16px'};
  box-sizing : border-box;
  gap: ${({gap}) => gap || '10px'};
  border: ${( {border} )=> border || 'none'};
  border-radius: ${( {borderRadius} )=> borderRadius || '1000px'};
  outline : none;
  background: ${({ background }) => background || " #4c9eeb;"};              
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || "row"};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // opacity : 0.8;

  &:hover{
    opacity : 1;
    // border: ${( {border} )=> border || 'none'};
  }

  &:focus {
    outline: none;
    // border : none;
  }
`;

const ButtonText = styled.p<{
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
}>`
  font-family: ${({ fontFamily }) => fontFamily || 'Noto Sans'};
  font-size: ${( { fontSize } ) => fontSize || '18px'};
  font-weight: ${ ({ fontWeight }) => fontWeight  || '500' };
  line-height: ${ ({ lineHeight }) => lineHeight  || '18px' };
  color:  ${ ({ color }) => color  || '#ffffff' };
  white-space : nowrap;
`;

interface ButtonProps {
  onClick?: () => void;
  svg?: React.ReactNode;
  text: string;
  width?: string;
  height? : string;
  background? : string;
  color? : string;
  fontWeight? : string;
  fontStyle? : string;
  fontSize? : string;
  fontFamily? : string;
  lineHeight? : string;
  border? : string;
  borderRadius? : string;
  padding? : string;
  gap?: string;
  flexDirection?: string;
};

const MultiFunctionButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  text,
  width,
  height,
  background,
  color,
  border,
  borderRadius,
  fontWeight,
  fontSize,
  fontFamily,
  lineHeight,
  padding,
  svg,
  gap,
  flexDirection
}) => {
  return (
    <Container>
      <Button 
        onClick={onClick} 
        width={width} 
        height={height} 
        background={background} 
        border={border} 
        borderRadius={borderRadius} 
        padding={padding}
        gap={gap}
        flexDirection={flexDirection}
      >
        {svg}
        <ButtonText 
          color={color} 
          fontFamily={fontFamily} 
          fontSize={fontSize} 
          fontWeight={fontWeight} 
          lineHeight={lineHeight}
        >
          {text}
          </ButtonText>
      </Button>
    </Container>
  );
};

export default MultiFunctionButtonComponent;
