import React from 'react'
import styled from 'styled-components'
import { binSVG } from '../../svg/svg'; 


const Container = styled.div`
    height : 100%;
    width : 100%;
    min-width: 1280px;
    min-height: 832px;
    position : absolute;
    top: 0;
    left: 0;
    display : flex;
    justify-content : center;
    align-items : center;
    background : #000000CC;
    z-index : 999;
`;

const MainContainer = styled.div`
    width : 480px;
    height : 320px;
    border-radius : 12px;
    padding : 24px 36px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    gap : 32px;
    background : #F5F8FA;
`;

const AlertContainer = styled.div`
    height : 140px;
    width : 408px;
    display : flex;
    flex-direction : column;
    gap : 16px;
    align-items : center;
`;

const BinBox = styled.div`
    width: 56px;
    height: 56px;
`;

const TextContainer = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 68px;
    display : flex;
    flex-direction : column;
    gap : 12px;
    align-items : center;
`;

const RemoveMemberDiv = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 18px;
    display : flex;
    justify-content : center;
`;

const RemoveMember = styled.div`
    width: 155px;
    height: 18px;
    // font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;
`;

const RemovalDescriptionDiv = styled.div`
    width : 308px;
    height : 38px;
    display : flex;
    // gap : 10px;
    justify-content : center;
`;

const RemovalDescription = styled.div`
    width: 304px;
    height: 38px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;


const ButtonContainer = styled.div`
    width : 408px;
    height : 42px;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;




const CancelButton = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 42px;
    border-radius : 1000px;
    padding : 12px 18px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 10px;
    background : #AAB8C2;

    &:hover{
    background :rgb(105, 126, 141);
    }

    // font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;

    cursor : pointer;
`;

const RemoveButton = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 42px;
    border-radius : 1000px;
    padding : 12px 18px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 10px;
    background : #EB5244;

    &:hover{
    background :rgb(235, 30, 19);
    }

    // font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #FFFFFF;

    cursor : pointer;
`;




interface RemoveModalProps {
    setShowMemberDetails: React.Dispatch<React.SetStateAction<boolean>>;
    setRemoveModal: React.Dispatch<React.SetStateAction<boolean>>
  }

const RemoveModal:React.FC<RemoveModalProps> = ({setRemoveModal}) => {


    const memberName = 'Aman Singh'
    
  return (
    <Container>
        <MainContainer>
            <AlertContainer>
                <BinBox>{binSVG}</BinBox>
                <TextContainer>
                    <RemoveMemberDiv>
                        <RemoveMember>Remove Member?</RemoveMember>
                    </RemoveMemberDiv>
                    <RemovalDescriptionDiv>
                        <RemovalDescription>Are you sure want to remove <span style={{color: '#14171A'}}>{memberName}</span> from your Team?</RemovalDescription>
                    </RemovalDescriptionDiv>
                </TextContainer>
            </AlertContainer>
            <ButtonContainer>
                <CancelButton onClick={()=>setRemoveModal(false)}>Cancel</CancelButton>
                <RemoveButton>Remove</RemoveButton>
            </ButtonContainer>
        </MainContainer>
    </Container>
  )
}

export default RemoveModal