import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TimerProps {
  height?: string;
  width?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  fontStyle?: string;
  gap?: string;
  svgIcon?: React.ReactNode;
  padding?: string;
  initialTime?: number; // Time in seconds
}

const Container = styled.div<TimerProps>`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  color: ${({ color }) => color || '#4D4D4D'};
  display: flex;
  align-items: center;
  justify-content : center;
  gap: ${({ gap }) => gap || '4px'};
  padding: ${({ padding }) => padding || '0'};
  box-sizing : border-box;
  font-family: ${({ fontStyle }) => fontStyle || 'Noto Sans'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ fontSize }) => fontSize || '16px'};
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Timer: React.FC<TimerProps> = ({
  height,
  width,
  color,
  fontSize,
  fontWeight,
  fontStyle,
  gap,
  svgIcon,
  padding,
  initialTime = 60, // Default to 60 seconds if not provided
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when time reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Container
      height={height}
      width={width}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      gap={gap}
      padding={padding}
    >
      {svgIcon} {formatTime(timeLeft)}
    </Container>
  );
};

export default Timer;
