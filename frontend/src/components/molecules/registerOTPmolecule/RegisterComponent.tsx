import React from 'react'
import styled from 'styled-components'
import TitleName from './TitleName';
import OtpComponent from './OtpComponent';
import MemberLoginComponent from './MemberLoginComponent';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RegisterComponent = () => {
  return (
    <Container>
        <TitleName/>
        <OtpComponent/>
        <MemberLoginComponent/>
    </Container>
  )
}

export default RegisterComponent