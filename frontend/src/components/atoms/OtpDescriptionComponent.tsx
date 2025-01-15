import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 330px;
    height: 38px;
    color : #657786;
    display : flex;
    justify-content: space-between;
`;

const SVGElementDiv = styled.div`
    width: 16.33px;
    height: 14px;
    top: 35px;
    left: 3px;
    gap: 0px;
    opacity: 0px;

`;

const DescriptionDiv = styled.div`
    width: 305.51px;
    height: 38px;
    top: 32px;
    left: 27.49px;
    gap: 0px;
    opacity: 0px;
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 300;
    line-height: 18.9px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

interface description {
  desc : string
}

const OtpDescriptionComponent :React.FC<description> = ({desc}) => {
  return (
    <Container>

        <SVGElementDiv>
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.34629 4.9H8.9788V3.5H7.34629M8.16254 12.6C4.56286 12.6 1.63251 10.087 1.63251 7C1.63251 3.913 4.56286 1.4 8.16254 1.4C11.7622 1.4 14.6926 3.913 14.6926 7C14.6926 10.087 11.7622 12.6 8.16254 12.6ZM8.16254 0C7.09062 0 6.0292 0.18106 5.03887 0.532843C4.04855 0.884626 3.14872 1.40024 2.39075 2.05025C0.85998 3.36301 0 5.14348 0 7C0 8.85651 0.85998 10.637 2.39075 11.9497C3.14872 12.5998 4.04855 13.1154 5.03887 13.4672C6.0292 13.8189 7.09062 14 8.16254 14C10.3274 14 12.4036 13.2625 13.9343 11.9497C15.4651 10.637 16.3251 8.85651 16.3251 7C16.3251 6.08075 16.114 5.17049 15.7038 4.32122C15.2935 3.47194 14.6923 2.70026 13.9343 2.05025C13.1764 1.40024 12.2765 0.884626 11.2862 0.532843C10.2959 0.18106 9.23446 0 8.16254 0ZM7.34629 10.5H8.9788V6.3H7.34629V10.5Z" fill="#657786"/>
        </svg>
        </SVGElementDiv>

        <DescriptionDiv>
        {desc}
        </DescriptionDiv>
    </Container>
  )
}

export default OtpDescriptionComponent