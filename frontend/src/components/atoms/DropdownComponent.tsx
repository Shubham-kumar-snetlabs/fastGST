import React, { useState } from 'react';
import styled from 'styled-components';

interface FilterComponentProps {
  svg?: React.ReactNode; // SVG or any JSX to render as an icon
  height?: string; // Height of the filter component
  width?: string; // Width of the filter component
  padding?: string; // Padding for the filter component
  gap?: string; // Gap between elements in the filter
  borderColor?: string; // Border color
  borderRadius?: string;
  background?: string; // Background color
  justifyContent? : string;
  text?: string;
  color?: string; // Text color
  fontSize?: string; // Font size for the text
  fontWeight?: number; // Font weight for the text
  fontStyle?: string; // Font style for the text
  options?: { value: string; label: string; svg?: any; onClick?: ()=>void}[];
  onChange?:  (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick?: ()=>void;
}

const FilterDiv = styled.div<FilterComponentProps>`
  width: ${({ width }) => width || '110px'};
  height: ${({ height }) => height || '36px'};
  padding: ${({ padding }) => padding || '9px 12px'};
  box-sizing: border-box;
  gap: ${({ gap }) => gap || '6px'};
  border-radius: ${({borderRadius}) => borderRadius || '100px'};
  border: 1px solid ${({ borderColor }) => borderColor || '#657786'};
  background: ${({ background }) => background || 'transparent'};
  display: flex;
  align-items: center;
  cursor : pointer;
  justify-content : ${({justifyContent}) => justifyContent || 'start'};
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
  cursor : pointer;

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
  borderRadius,
  background,
  justifyContent,
  text,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  options = [],
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    () => options.find((opt) => opt.label === text) || null
  );

const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedOption = options.find(
    (option) => option.value === event.target.value
  );
  setSelectedOption(selectedOption || null);

  // Execute the specific `onClick` handler if defined
  if (selectedOption?.onClick) {
    selectedOption.onClick();
  }

  if (onChange) {
    onChange(event); // Pass the event to the parent component
  }
};
  

  return (
    <FilterDiv
      height={height}
      width={width}
      padding={padding}
      justifyContent={justifyContent}
      gap={gap}
      borderColor={borderColor}
      borderRadius= {borderRadius}
      background={background}
    >
      {selectedOption?.svg || svg}
      <FilterText
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
      >
        {selectedOption?.label || text}
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
