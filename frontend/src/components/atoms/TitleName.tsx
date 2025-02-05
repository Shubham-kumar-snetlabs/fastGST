import React from 'react'
import styled from 'styled-components'

const Container = styled.div<{
  width? : string;
  height? : string;
  gap? : string;
}>`
  height:  ${({ height }) => height || '250px'};
  width: ${({ width }) => width || '170px'};
  display: flex;
  flex-direction: column;
  align-items : center;
  gap: ${({gap}) => gap || '16px'};
`;

const Logo = styled.div`
    width: 96px;;
    height: 96px;
`;

const TitleHeader = styled.div`
    height: 28px;
    width: auto;
    white-space : nowrap;
    font-family: Noto Sans;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

interface TitleNameProps {
  svgContent: React.ReactNode; 
  title: string; 

  height? : string;
  width? : string;
  gap? : string;
}

const TitleName : React.FC<TitleNameProps> = ({svgContent, title, height, width, gap}) => {
  return (
    <Container height={height} width={width} gap={gap}>
        <Logo>
        {svgContent}
        </Logo>
        <TitleHeader>{title}</TitleHeader>
    </Container>
  )
}

export default TitleName