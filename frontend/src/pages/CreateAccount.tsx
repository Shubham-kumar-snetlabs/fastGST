import React from 'react'
import styled from 'styled-components'
import CreateAccountTitle from '../components/molecules/createAccountmolecule/CreateAccountTitle';
import CreateAccountDetails from '../components/molecules/createAccountmolecule/CreateAccountDetails';
import KYCDescription from '../components/atoms/CreateAccountatom/KYCDescription';


const Container = styled.div`
    height : 517px;
    width : 336px;
    display : flex;
    gap: 32px;
    flex-direction : column;
    align-items: center;
    gap : 60px;
    color : #14171A;
`;

const FirstContainer = styled.div`
    height : 140px;
    width : 234px;
`;

const SecondContainer = styled.div`
    height : 256px;
    width : 336px;
`;

const ThirdConatiner = styled.div`
    height : 57px;
    width : 336px;
`;


const CreateAccount = () => {
  return (
    <Container>
        <FirstContainer>
            <CreateAccountTitle/>
        </FirstContainer>
        <SecondContainer>
            <CreateAccountDetails/>
        </SecondContainer>
        <ThirdConatiner>
            <KYCDescription/>
        </ThirdConatiner>
    </Container>
  )
}

export default CreateAccount