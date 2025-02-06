import React from "react";
import styled from "styled-components";

const InnerHeadContainer = styled.div<{
  gap?: string;
  height?: string;
  width?: string;
}>`
  height: ${({ height }) => height || "52px"};
  width: ${({ width }) => width || "100%"};
  display: flex;
  gap: ${({ gap }) => gap || "12px"};
`;

const HeadIconContainer = styled.div<{ size?: string }>`
  height: ${({ size }) => size || "40px"};
  width: ${({ size }) => size || "40px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadTextContainer = styled.div<{
  textGap?: string;
  textHeight?: string;
  textWidth?: string;
}>`
  height: ${({ textHeight }) => textHeight || "80px"};
  width: ${({ textWidth }) => textWidth || "fit-content"};
  display: flex;
  flex-direction: column;
  gap: ${({ textGap }) => textGap || "12px"};
`;

const HeadTitle = styled.div<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  titleHeight?: string;
  titleWidth?: string;
}>`
  width: ${({ titleWidth }) => titleWidth || "fit-content"};
  height: ${({ titleHeight }) => titleHeight || "24px"};
  font-size: ${({ fontSize }) => fontSize || "24px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  color: ${({ color }) => color || "#14171a"};
`;

const HeadDescription = styled.div<{
  fontSize?: string;
  color?: string;
  descriptionWidth?: string;
  descriptionHeight?: string;
}>`
  width: ${({ descriptionWidth }) => descriptionWidth || "fit-content"};
  height: ${({ descriptionHeight }) => descriptionHeight || "16px"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#657786"};
`;

interface DashBoardHeadProps {
  height?: string;
  width?: string;
  textHeight?: string;
  textWidth?: string;
  titleHeight?: string;
  titleWidth?: string;
  descriptionHeight?: string;
  descriptionWidth?: string;
  svg?: React.ReactNode;
  headTitle: string;
  headDescription?: string;
  titleColor?: string;
  titleFontSize?: string;
  titleFontWeight?: string;
  descriptionColor?: string;
  descriptionFontSize?: string;
  iconSize?: string;
  gap?: string;
  textGap?: string;
}

const DashBoardTitle: React.FC<DashBoardHeadProps> = ({
  height,
  width,
  textHeight,
  textWidth,
  titleHeight,
  titleWidth,
  descriptionHeight,
  descriptionWidth,
  svg,
  headTitle,
  headDescription,
  titleColor,
  titleFontSize,
  titleFontWeight,
  descriptionColor,
  descriptionFontSize,
  iconSize,
  gap,
  textGap,
}) => {
  return (
    <InnerHeadContainer height={height} width={width} gap={gap}>
      {svg && <HeadIconContainer size={iconSize}>{svg}</HeadIconContainer>}
      <HeadTextContainer
        textHeight={textHeight}
        textWidth={textWidth}
        textGap={textGap}
      >
        <HeadTitle
          fontSize={titleFontSize}
          fontWeight={titleFontWeight}
          color={titleColor}
          titleHeight={titleHeight}
          titleWidth={titleWidth}
        >
          {headTitle}
        </HeadTitle>

        {headDescription && (
          <HeadDescription
            fontSize={descriptionFontSize}
            color={descriptionColor}
            descriptionHeight={descriptionHeight}
            descriptionWidth={descriptionWidth}
          >
            {headDescription}
          </HeadDescription>
        )}
      </HeadTextContainer>
    </InnerHeadContainer>
  );
};

export default DashBoardTitle;
