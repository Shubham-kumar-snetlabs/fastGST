import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 336px;
    height: 16px;
    display : flex;
    justify-content : center;
    align-items: center;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #4D4D4D
`;



const AlreadyAMemberComponent = () => {
  return (
    <Container>
        Already a member? <span style={{color:'#4C9EEB', marginLeft:'4px'}}>Login</span>
    </Container>
  )
}

export default AlreadyAMemberComponent