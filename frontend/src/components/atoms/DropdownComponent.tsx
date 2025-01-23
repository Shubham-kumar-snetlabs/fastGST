import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterComponentProps {
  svg?: React.ReactNode; // SVG or any JSX to render as an icon
  height?: string; // Height of the filter component
  width?: string; // Width of the filter component
  padding?: string; // Padding for the filter component
  gap?: string; // Gap between elements in the filter
  borderColor?: string; // Border color
  background?: string; // Background color
  text?: string;
  color?: string; // Text color
  fontSize?: string; // Font size for the text
  fontWeight?: number; // Font weight for the text
  fontStyle?: string; // Font style for the text
  options?: { value: string; label: string }[]; // Dropdown options
  onChange?:  (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterDiv = styled.div<FilterComponentProps>`
  width: ${({ width }) => width || '110px'};
  height: ${({ height }) => height || '36px'};
  padding: ${({ padding }) => padding || '9px 12px'};
  box-sizing: border-box;
  gap: ${({ gap }) => gap || '6px'};
  border-radius: 100px;
  border: 1px solid ${({ borderColor }) => borderColor || '#657786'};
  background: ${({ background }) => background || 'transparent'};
  display: flex;
  align-items: center;
`;

const FilterText = styled.div<FilterComponentProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-style: ${({ fontStyle }) => fontStyle || 'Noto Sans'};
  color: ${({ color }) => color || '#657786'};
  line-height: ${({ fontSize }) => fontSize || '16px'};
  white-space : nowrap;
`;

const Dropdown = styled.select<FilterComponentProps>`
  width: 16px;
  height: 16px;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || '#657786'};
  background: ${({ background }) => background || '#F5F8FA'};
  border: none;
  outline: none;

  option {
    font-size: ${({ fontSize }) => fontSize || '14px'};
    color: ${({ color }) => color || '#657786'};
    background: transparent;
    border-radius: 100px;
    padding: 2px;
    box-sizing: border-box;
  }
`;

const DropdownComponent: React.FC<FilterComponentProps> = ({
  svg,
  height,
  width,
  padding,
  gap,
  borderColor,
  background,
  text,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  options = [],
  onChange,
}) => {
  const [selectedText, setSelectedText] = useState(text);
  const [showSVG, setShowSVG] = useState(svg)

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((option) => option.value === event.target.value);
    setSelectedText(selectedOption?.label || text);
    setShowSVG(null)
    if (onChange) {
      onChange(event); // Pass the full event to the parent
    }
  };
  

  return (
    <FilterDiv
      height={height}
      width={width}
      padding={padding}
      gap={gap}
      borderColor={borderColor}
      background={background}
    >
      {showSVG}
      <FilterText
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
      >
        {selectedText}
      </FilterText>
      <Dropdown
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        background={background}
        onChange={handleDropdownChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Dropdown>
    </FilterDiv>
  );
};

export default DropdownComponent;
