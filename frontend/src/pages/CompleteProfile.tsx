
import styled from 'styled-components'
import TitleName from '../components/atoms/TitleName';
import DescriptionComponent from '../components/atoms/DescriptionComponent';
import UserDetailInputs from '../components/organism/UserDetailInputs';
import { CompleteProfileSVG } from '../svg/svg';



const Container = styled.div`
    height : 517px;
    width : 336px;
    display : flex;
    gap: 32px;
    flex-direction : column;
    align-items: center;
    gap : 20px;
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


const CompleteProfile = () => {

                        
    const desc = 'It’s mandatory to verify your KYC. This is a one-time process and won’t not take more than 1 minute of your time.'
  return (
    <Container>
        <FirstContainer>
            <TitleName svgContent={CompleteProfileSVG} title='Complete Profile'/>
        </FirstContainer>
        <SecondContainer>
            <UserDetailInputs/>
        </SecondContainer>
        <ThirdConatiner>
            <DescriptionComponent desc={desc}/>
        </ThirdConatiner>
    </Container>
  )
}

export default CompleteProfile