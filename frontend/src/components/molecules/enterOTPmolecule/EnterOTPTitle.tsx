import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 251px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 96px;;
    height: 96px;
    margin-bottom : 30px;
`;

const TitleHeader = styled.div`
    height: 28px;
    width: 251px;
    font-family: Noto Sans;
    display : flex;
    justify-content : center;
    font-size: 28px;
    font-weight: 600;
    line-height: 28px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;
`;

interface OtpTitleProps{
  svgContent : React.ReactNode
  title : string
}

const EnterOTPTitle: React.FC<OtpTitleProps> = ({svgContent , title}) => {
  return (
    <Container>
        <Logo>
        {svgContent}
        </Logo>
        <TitleHeader>{title}</TitleHeader>
    </Container>
  )
}

export default EnterOTPTitle