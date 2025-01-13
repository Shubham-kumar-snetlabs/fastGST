import React from 'react'
import styled from 'styled-components'
import AlreadyAMemberComponent from '../../atoms/registerOTPatom/AlreadyAMemberComponent';
import OtpDescriptionComponent from '../../atoms/registerOTPatom/OtpDescriptionComponent';

const Container = styled.div`
    height: 70px;
    width: 336px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    gap: 20px;
    position : relative;
    top: 40px;

`;



const MemberLoginComponent = () => {
  return (
    <Container>
      <AlreadyAMemberComponent/>
      <OtpDescriptionComponent/>
    </Container>
  )
}

export default MemberLoginComponent