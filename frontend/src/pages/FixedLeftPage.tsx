
import styled from 'styled-components'
import CarouselComponent from '../components/molecules/registerOTPmolecule/CarouselComponent';

const Container = styled.div`
    flex :1;
    gap: 8px;
    position: relative;
    top: 119px;
    left: 26px;
`;

const Content = styled.div`
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    height: 480px;
`

const Logo = styled.div`
    width: 48px;
    height: 48px;
    margin-bottom : 30px;
`;

const WelcomeHeading = styled.div`
    height : 32px;
    // width : 325px;
    align-text: center;
    font-weight : 600;
    font-family: Noto Sans;
    font-size : 32px;
    color: #FFFFFF;
    line-height: 32px;
`;

const SubHeading = styled.div`
    height : 33px;
    width : 392px;
    align-text: center;
    font-weight : 500;
    font-family: Noto Sans;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 32.64px;
`;

const Description = styled.div`
    height : 44px;
    width : 392px;
    align-text: center;
    font-weight : 400;
    font-family: Noto Sans;
    font-size: 16px;
    color: #F8F9F9;
    line-height: 21.6px;
`;

const CarouselContainer = styled.div`
`;




const FixedLeftPage = () => {
  return (
    <Container>
        <Content>
            <div>
            <Logo>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2461_2038)">
            <path d="M22.65 46.7999C23.055 47.0998 23.535 47.2499 24 47.2499C24.465 47.2499 24.945 47.0998 25.35 46.7999L28.605 44.3848C36.525 38.4898 41.25 29.0849 41.25 19.2149V8.99988C41.25 8.0849 40.695 7.24482 39.84 6.91487L24.84 0.914866C24.3 0.689836 23.7 0.689836 23.16 0.914866L8.16 6.91487C7.305 7.24482 6.75 8.0849 6.75 8.99988V19.2149C6.75 29.0849 11.475 38.4899 19.395 44.3848L22.65 46.7999Z" fill="white"/>
            <g clip-path="url(#clip1_2461_2038)">
            <path d="M29.2496 6.38671C29.1157 6.38685 29.2901 6.27212 29.1752 6.3807C29.0627 6.5334 29.1846 6.32863 29.0226 6.60637L16.6965 24.4439C16.6364 24.6211 16.6064 24.8198 16.6096 25.0206C16.6128 25.2214 16.6489 25.4175 16.7146 25.5898C16.7802 25.7621 16.8731 25.9047 16.9842 26.0037C17.0953 26.1027 17.2207 26.1547 17.3484 26.1548H20.9221L19.5747 39.9345C19.5503 40.1861 19.5791 40.4434 19.6565 40.6669C19.734 40.8903 19.856 41.0676 20.0036 41.1715C20.1513 41.2754 20.3166 41.3002 20.4741 41.2421C20.6316 41.184 20.7726 41.0462 20.8755 40.8498L31.2241 21.0758C31.313 20.9056 31.3693 20.6993 31.3866 20.4807C31.4039 20.2622 31.3813 20.0404 31.3216 19.8412C31.2619 19.642 31.1675 19.4735 31.0494 19.3555C30.9312 19.2374 30.7942 19.1745 30.6542 19.1742H25.9851L29.8234 8.10085C29.8848 7.92379 29.9159 7.72465 29.9136 7.52298C29.9114 7.32131 29.8758 7.12405 29.8104 6.95055C29.745 6.77706 29.6521 6.6333 29.5407 6.5334C29.4294 6.43349 29.3034 6.38086 29.1752 6.3807L29.2496 6.38671Z" fill="#1DA1F2"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_2461_2038">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
            <clipPath id="clip1_2461_2038">
            <rect width="48" height="48" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </Logo>
            <WelcomeHeading>
              Welcome to FastGST!
            </WelcomeHeading>
            <SubHeading>
                <p>Start your journey with us.</p>
            </SubHeading>
            <Description>
                <p>Streamlines client-CA communication by automatically forwarding OTPs for faster process.</p>
            </Description>
            </div>
        <CarouselContainer>
            <CarouselComponent/>
        </CarouselContainer>
        </Content>
    </Container>
  )
}

export default FixedLeftPage