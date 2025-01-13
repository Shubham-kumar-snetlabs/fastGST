import React from 'react'
import styled from 'styled-components'
import EnterOTPTitle from '../components/molecules/enterOTPmolecule/EnterOTPTitle';
import EnterOTPDescription from '../components/molecules/enterOTPmolecule/EnterOTPDescription';
import EnterOTPBox from '../components/molecules/enterOTPmolecule/EnterOTPBox';

const Container = styled.div`
    height : 358px;
    width : 336px;
    display : flex;
    gap: 16px;
    flex-direction : column;
    align-items: center;
`;


const VerifyKYC = () => {
  return (
    <Container>
        <EnterOTPTitle/>
        <EnterOTPDescription/>
        <EnterOTPBox/>
    </Container>
  )
}

export default VerifyKYC