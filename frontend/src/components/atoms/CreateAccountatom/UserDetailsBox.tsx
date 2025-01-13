import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height : 336px;
    width : 194px;
    display : flex;
    flex-direction : column;
    gap : 20px;
`;

const NameContainer = styled.div`
    height : 54px;
    width : 336px;
    display : flex;
    gap: 10px;
`;



const NameBlock = styled.input `
    width: 160px;
    height: 54px;
    border-radius: 4px;
    border: 1px solid #657786
    opacity: 0px;
    background: #F5F8FA;
    color : #14171A;
    padding : 0 0 0 8px;
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    outline : none;
`;

const EmailContainer = styled.div `
    width: 336px;
    height: 54px;
`;

const EmailBlock = styled.input`
    width: 336px;
    height: 54px;
    border-radius: 4px;
    border: 1px solid #657786
    opacity: 0px;
    background: #F5F8FA;
    color : #14171A;
    padding : 0 7px 0 8px;
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`



const UserDetailsBox = () => {
  return (
    <Container>

        <NameContainer>
            <NameBlock
            type='text'
            placeholder='First Name'/>
            <NameBlock
            type='text'
            placeholder='Last Name'/>
        </NameContainer>

        <EmailContainer>
            <EmailBlock 
            type='text'
            placeholder='Email (Optional)'/>
        </EmailContainer>

        <EmailContainer>
            <EmailBlock 
            type='number'
            placeholder='Aadhar Number'/>
        </EmailContainer>


    </Container>
  )
}

export default UserDetailsBox