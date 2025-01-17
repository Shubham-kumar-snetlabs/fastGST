import React from 'react'
import styled from 'styled-components'
import DashBoardNav from './DashBoardNav';
import DashBoardFooter from './DashBoardFooter';

const Container = styled.div`

`;

const FirstConatiner = styled.div`
    width: 288px;
    height: 96px;
    box-sizing : border-box;
    padding: 32px 16px 32px 16px;
    gap: 10px;
`;

const FirstContainerDiv = styled.div`
    width : 256px;
    height : 32px;
    display : flex;
    justify-content : space-between;
    align-items: center;
`;

const LogoandText = styled.div`
    width: 118px;
    height: 32px;
    display : flex;
    gap: 8px;
`;

const Text = styled.div`
    width: 78px;
    height: 20px;
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #1DA1F2;
`;


const VersionDiv = styled.div`
    width: 43px;
    height: 14px;
    display : flex;
    gap: 8px;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const SecondContainer = styled.div`
    width: 288px;
    height: 352px;
    padding: 8px 0px 8px 0px;
    gap: 10px;
    border-top: 2px ;
    box-sizing : border-box;
`;

const InnerSecondContainer = styled.div`
    height : 288px;
    width : 336px;
    padding-left : 12px;
    padding-right : 12px;
`;

const ThirdContainer = styled.div`
    width: 288px;
    height: 105px;
    padding: 16px 12px 16px 12px;
    gap: 10px;
    border-top: 2px;
    box-sizing : border-box;
    position : relative;
    top : 277px;
`;

const DashBoardLeft = () => {
    const zapperSVG = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2741_1016)">
    <path d="M15.1 31.1996C15.37 31.3996 15.69 31.4996 16 31.4996C16.31 31.4996 16.63 31.3996 16.9 31.1996L19.07 29.5896C24.35 25.6596 27.5 19.3896 27.5 12.8096V5.9996C27.5 5.38961 27.13 4.82956 26.56 4.60959L16.56 0.609585C16.2 0.459565 15.8 0.459565 15.44 0.609585L5.44 4.60959C4.87 4.82956 4.5 5.38961 4.5 5.9996V12.8096C4.5 19.3896 7.65002 25.6596 12.93 29.5896L15.1 31.1996Z" fill="#1DA1F2"/>
    <g clip-path="url(#clip1_2741_1016)">
    <path d="M19.4991 4.25781C19.4098 4.2579 19.5261 4.18142 19.4495 4.2538C19.3745 4.3556 19.4558 4.21909 19.3478 4.40425L11.1303 16.296C11.0903 16.4141 11.0703 16.5465 11.0724 16.6804C11.0745 16.8143 11.0986 16.945 11.1424 17.0599C11.1862 17.1747 11.2481 17.2698 11.3221 17.3358C11.3962 17.4018 11.4798 17.4365 11.565 17.4365H13.9474L13.0491 26.623C13.0329 26.7908 13.0521 26.9623 13.1037 27.1112C13.1554 27.2602 13.2367 27.3784 13.3351 27.4477C13.4336 27.5169 13.5437 27.5335 13.6487 27.4947C13.7537 27.456 13.8477 27.3641 13.9164 27.2332L20.8154 14.0505C20.8747 13.9371 20.9122 13.7995 20.9237 13.6538C20.9353 13.5081 20.9202 13.3603 20.8804 13.2274C20.8406 13.0946 20.7777 12.9824 20.6989 12.9036C20.6202 12.8249 20.5288 12.783 20.4355 12.7828H17.3228L19.8816 5.40057C19.9226 5.28253 19.9433 5.14977 19.9418 5.01532C19.9403 4.88088 19.9165 4.74936 19.8729 4.6337C19.8294 4.51804 19.7674 4.4222 19.6932 4.3556C19.6189 4.28899 19.535 4.25391 19.4495 4.2538L19.4991 4.25781Z" fill="white"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_2741_1016">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    <clipPath id="clip1_2741_1016">
    <rect width="32" height="32" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  return (
    <Container>
        <FirstConatiner>
            <FirstContainerDiv>
                <LogoandText>
                    {zapperSVG}
                    <Text>FastGST</Text>
                </LogoandText>
                <VersionDiv>v 1.0.0</VersionDiv>
            </FirstContainerDiv>
        </FirstConatiner>
        <SecondContainer>
            <InnerSecondContainer>
                <DashBoardNav/>
            </InnerSecondContainer>
        </SecondContainer>
        <ThirdContainer>
            <DashBoardFooter/>
        </ThirdContainer>
    </Container>
  )
}

export default DashBoardLeft