import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height : 44px;
    width : 336px;
    display : flex;
    justify-content : center;
`;

const InnerContainer = styled.div`
    height : 44px;
    width : 332px;
`;

const DescriptionDiv = styled.div`
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6x;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
    margin : 0;
`;

const NumberDiv = styled.div`
    display : flex;
    justify-content : center;
`



const EnterOTPDescription = () => {
  return (
    <Container>
        <InnerContainer>
            <DescriptionDiv>One Time Password has been sent to </DescriptionDiv>
            <NumberDiv >
                <p style={{color: '#4C9EEB', margin:'0'}}>+91-1234567890</p>
            </NumberDiv>
        </InnerContainer>
    </Container>
  )
}

export default EnterOTPDescription