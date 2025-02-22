import React from "react";
import styled from "styled-components";

interface SearchComponentProps {
  svg?: React.ReactNode;
  placeholder?: string;
  height?: string;
  width?: string;
  padding?: string;
  background?: string;
  color?: string;
  borderColor?: string;
  fontStyle?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
}

const SearchBarDiv = styled.div<SearchComponentProps>`
  width: ${({ width }) => width || "216px"};
  height: ${({ height }) => height || "36px"};
  padding: ${({ padding }) => padding || "9px 8px"};
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid ${({ borderColor }) => borderColor || "#AAB8C2"};
  background: ${({ background }) => background || "#F5F8FA"};
  color: ${({ color }) => color || "#657786"};
  display: flex;
  gap: 10px;
`;

const SearchBarItem = styled.div`
  height: 18px;
  width: 100%;
  display: flex;
`;

const SearchIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
`;

const SearchInputDiv = styled.div<SearchComponentProps>`
  width: calc(100% - 18px);
  height: 14px;
  line-height: 14px;
  color: ${({ color }) => color || "#657786"};
  display: flex;
`;

const SearchInput = styled.input<SearchComponentProps>`
  background: transparent;
  outline: none;
  border: none;
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-style: ${({ fontStyle }) => fontStyle || "italic"};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  font-family: ${({ fontFamily }) => fontFamily || "Noto Sans"};
  color: ${({ color }) => color || "#657786"};
  width: 100%;
`;

const SearchComponent: React.FC<SearchComponentProps> = ({
  svg,
  placeholder = "Search a Team member...",
  height,
  width,
  padding,
  background,
  color,
  borderColor,
  fontStyle,
  fontFamily,
  fontWeight,
  fontSize,
}) => {
  return (
    <SearchBarDiv
      height={height}
      width={width}
      padding={padding}
      background={background}
      color={color}
      borderColor={borderColor}
    >
      <SearchBarItem>
        <SearchIcon>{svg}</SearchIcon>
        <SearchInputDiv color={color}>
          <SearchInput
            placeholder={placeholder}
            fontStyle={fontStyle}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
          />
        </SearchInputDiv>
      </SearchBarItem>
    </SearchBarDiv>
  );
};

export default SearchComponent;
