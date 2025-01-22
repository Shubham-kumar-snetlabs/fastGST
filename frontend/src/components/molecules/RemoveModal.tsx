import React from 'react'
import styled from 'styled-components'


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
    const binSVG = <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="28" fill="#EB5244"/>
    <path d="M25.3327 18.6667H30.666C30.666 17.9594 30.3851 17.2811 29.885 16.781C29.3849 16.281 28.7066 16 27.9993 16C27.2921 16 26.6138 16.281 26.1137 16.781C25.6136 17.2811 25.3327 17.9594 25.3327 18.6667ZM23.3327 18.6667C23.3327 18.0538 23.4534 17.447 23.6879 16.8808C23.9224 16.3146 24.2662 15.8002 24.6995 15.3668C25.1329 14.9335 25.6473 14.5898 26.2135 14.3552C26.7797 14.1207 27.3865 14 27.9993 14C28.6122 14 29.219 14.1207 29.7852 14.3552C30.3514 14.5898 30.8658 14.9335 31.2992 15.3668C31.7325 15.8002 32.0763 16.3146 32.3108 16.8808C32.5453 17.447 32.666 18.0538 32.666 18.6667H40.3327C40.5979 18.6667 40.8523 18.772 41.0398 18.9596C41.2273 19.1471 41.3327 19.4015 41.3327 19.6667C41.3327 19.9319 41.2273 20.1862 41.0398 20.3738C40.8523 20.5613 40.5979 20.6667 40.3327 20.6667H38.5727L37.0127 36.8147C36.893 38.052 36.3167 39.2003 35.3963 40.0358C34.4758 40.8712 33.2771 41.3338 32.034 41.3333H23.9647C22.7218 41.3335 21.5235 40.8707 20.6033 40.0353C19.6831 39.1999 19.107 38.0517 18.9873 36.8147L17.426 20.6667H15.666C15.4008 20.6667 15.1464 20.5613 14.9589 20.3738C14.7714 20.1862 14.666 19.9319 14.666 19.6667C14.666 19.4015 14.7714 19.1471 14.9589 18.9596C15.1464 18.772 15.4008 18.6667 15.666 18.6667H23.3327ZM25.9993 25C25.9993 24.7348 25.894 24.4804 25.7065 24.2929C25.5189 24.1054 25.2646 24 24.9993 24C24.7341 24 24.4798 24.1054 24.2922 24.2929C24.1047 24.4804 23.9993 24.7348 23.9993 25V35C23.9993 35.2652 24.1047 35.5196 24.2922 35.7071C24.4798 35.8946 24.7341 36 24.9993 36C25.2646 36 25.5189 35.8946 25.7065 35.7071C25.894 35.5196 25.9993 35.2652 25.9993 35V25ZM30.9993 24C31.2646 24 31.5189 24.1054 31.7065 24.2929C31.894 24.4804 31.9993 24.7348 31.9993 25V35C31.9993 35.2652 31.894 35.5196 31.7065 35.7071C31.5189 35.8946 31.2646 36 30.9993 36C30.7341 36 30.4798 35.8946 30.2922 35.7071C30.1047 35.5196 29.9993 35.2652 29.9993 35V25C29.9993 24.7348 30.1047 24.4804 30.2922 24.2929C30.4798 24.1054 30.7341 24 30.9993 24ZM20.978 36.6227C21.0499 37.3649 21.3957 38.0537 21.9478 38.5548C22.5 39.056 23.219 39.3335 23.9647 39.3333H32.034C32.7797 39.3335 33.4987 39.056 34.0509 38.5548C34.603 38.0537 34.9488 37.3649 35.0207 36.6227L36.5647 20.6667H19.434L20.978 36.6227Z" fill="#F8F8F9"/>
    </svg>

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