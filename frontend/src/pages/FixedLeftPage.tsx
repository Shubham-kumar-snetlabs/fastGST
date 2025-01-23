
import styled from 'styled-components'
import CarouselComponent from '../components/molecules/CarouselComponent';
import { fixedLeftPageSVG } from '../svg/svg';

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
            {fixedLeftPageSVG}
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