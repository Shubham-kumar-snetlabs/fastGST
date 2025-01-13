import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 32px;
    width : 32px;
    border : 1px solid #4C9EEB;
    border-radius : 4px;
    padding : 8px;
    gap: 8px;
`;

const OTPNumberInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #14171a;
  padding: 8px;
`;


const OTPBox = () => {
  const handleOTPBoxChange = ()=>{
    console.log('hello');
    
  }
  return (
    <Container>
      <OTPNumberInput
      type='number'
      onChange={handleOTPBoxChange} />
    </Container>
  )
}

export default OTPBox