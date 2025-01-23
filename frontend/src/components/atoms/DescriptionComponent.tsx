import React from 'react'
import styled from 'styled-components'
import { informationSVG } from '../../svg/svg';

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

const DescriptionComponent :React.FC<description> = ({desc}) => {

  
  return (
    <Container>
        <SVGElementDiv>
          {informationSVG}
        </SVGElementDiv>
        <DescriptionDiv>
        {desc}
        </DescriptionDiv>
    </Container>
  )
}

export default DescriptionComponent