import React from 'react';
import styled from 'styled-components';

interface SearchComponentProps {
  svg?: React.ReactNode; // SVG or any JSX to render as an icon
  placeholder?: string; // Placeholder text for the input
  height?: string; // Custom height for the search bar
  width?: string; // Custom width for the search bar
  padding?: string; // Padding for the search bar
  background?: string; // Background color for the search bar
  color?: string; // Font color for text
  borderColor?: string; // Border color
  fontStyle?: string; // Font style for the input
  fontWeight?: number; // Font weight for the input
  fontSize?: string; // Font size for the input
}

const SearchBarDiv = styled.div<SearchComponentProps>`
  width: ${({ width }) => width || '216px'};
  height: ${({ height }) => height || '36px'};
  padding: ${({ padding }) => padding || '9px 8px'};
  box-sizing: border-box;
  border-radius: 100px;
  border: 1px solid ${({ borderColor }) => borderColor || '#AAB8C2'};
  background: ${({ background }) => background || '#F5F8FA'};
  color: ${({ color }) => color || '#657786'};
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
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  line-height: 14px;
  color: ${({ color }) => color || '#657786'};
  display: flex;
`;

const SearchInput = styled.input<SearchComponentProps>`
  background: transparent;
  outline: none;
  border: none;
  font-style: ${({ fontStyle }) => fontStyle || 'italic'};
  color: ${({ color }) => color || '#657786'};
  width: 100%;
`;

const SearchComponent: React.FC<SearchComponentProps> = ({
  svg,
  placeholder = 'Search a Team member...',
  height,
  width,
  padding,
  background,
  color,
  borderColor,
  fontStyle,
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
        <SearchInputDiv
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        >
          <SearchInput
            placeholder={placeholder}
            fontStyle={fontStyle}
            color={color}
          />
        </SearchInputDiv>
      </SearchBarItem>
    </SearchBarDiv>
  );
};

export default SearchComponent;
