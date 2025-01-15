import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 251px;
    height: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 96px;;
    height: 96px;
    margin-bottom : 20px;
`;

const TitleHeader = styled.div`
    height: 28px;
    width: 251px;
    // font-family: Noto Sans;
    font-size: 28px;
    font-weight: 500;
    line-height: 10px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    display :flex;
    justify-content : center;
`;

interface TitleNameProps {
  svgContent: React.ReactNode; 
  title: string; 
}

const TitleName : React.FC<TitleNameProps> = ({svgContent , title}) => {
  return (
    <Container>
        <Logo>
        
        {svgContent}

        </Logo>
        <TitleHeader>{title}</TitleHeader>
    </Container>
  )
}

export default TitleName