import React from "react";
import styled from "styled-components";

interface StyledProps {
  width?: string;
  height?: string;
  padding?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  textColor?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  gap? : string;

  photoWidth?: string;
  photoHeight?: string;

  NameNumberandEmailGap?: string;

  NameTextWidth? : string;
  NameTexHeight? : string;
  NameTextSize? : string;
  NameTextColor? : string;
  NameTextWeight? : string;
}


const PhotoandDetails = styled.div<StyledProps>`
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "32px"};
  padding: ${({padding}) =>padding|| "4px 12px 4px 4px"};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: ${({gap}) => gap || "6px"};
  border-radius: ${({ borderRadius }) => borderRadius || "1000px"};
  border: ${({ border }) => border || "1px solid #aab8c2"};
  background: ${({ background }) => background || "transparent"};
  cursor: pointer;
`;

const Photo = styled.img<StyledProps>`
  width: ${({photoWidth})=>photoWidth || "24.15px"};
  height: ${({photoHeight})=>photoHeight || "24px"};
  border-radius: 1000px;
`;

const NameNumberandEmail = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: ${({NameNumberandEmailGap})=>NameNumberandEmailGap || "8px"}
`;

const Name = styled.div<StyledProps>`
  width : ${({NameTextWidth}) => NameTextWidth || "auto"};
  min-width: 80px;
  height: ${({NameTexHeight}) => NameTexHeight || "16px"};
  font-family: ${({ fontStyle }) => fontStyle || "Noto Sans"};
  font-size: ${({ NameTextSize }) => NameTextSize || "16px"};
  font-weight: ${({ NameTextWeight }) => NameTextWeight || "500"};
  line-height: 16px;
  text-align: left;
  color: ${({ NameTextColor }) => NameTextColor || "#14171a"};
`;

const Number = styled.div<StyledProps>`
  width: fit-content;
  min-width: 210px;
  height: 16px;
  font-family: ${({ fontStyle }) => fontStyle || "Noto Sans"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  line-height: 16px;
  text-align: left;
  color: ${({ textColor }) => textColor || "#14171a"};
`;

const Email = styled.div<StyledProps>`
  width: auto;
  min-width: 210px;
  height: 16px;
  font-family: ${({ fontStyle }) => fontStyle || "Noto Sans"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  line-height: 16px;
  text-align: left;
  color: ${({ textColor }) => textColor || "#14171a"};
`;

interface PersonInfoProps extends StyledProps {
  name: string;
  photo?: string;
  number?: string;
  email?: string;
  onClick?: () => void;
}

const PersonInfoComponent: React.FC<PersonInfoProps> = ({
  name,
  photo,
  number,
  email,
  onClick,
  photoWidth,
  photoHeight,
  ...styledProps
}) => {
  return (
    <PhotoandDetails onClick={onClick} {...styledProps}>
      {photo && <Photo src={photo} alt={name} photoWidth={photoWidth} photoHeight={photoHeight} />}
      <NameNumberandEmail>
        <Name {...styledProps}>{name}</Name>
        {number && <Number {...styledProps}>{number}</Number>}
        {email && <Email {...styledProps}>{email}</Email>}
      </NameNumberandEmail>
    </PhotoandDetails>
  );
};

export default PersonInfoComponent;
