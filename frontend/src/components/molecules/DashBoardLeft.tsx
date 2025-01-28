
import styled from 'styled-components'
import DashBoardNav from './DashBoardNav';
import { zapperSVG } from '../../svg/svg';
import PersonInfoComponent from '../atoms/PersonInfoComponent';
import DashBoardFilter from './DashBoardFilter';


const Container = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`;

const FirsTandSecondContainer = styled.div`

`;

const FirstConatiner = styled.div`
    width: 288px;
    height: 96px;
    box-sizing : border-box;
    padding: 32px 16px 32px 16px;
    gap: 60px;
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
    height : 100%;
    min-height: 352px;
    padding: 8px 0px 8px 0px;
    gap: 10px;
    border-top: 2px ;
    box-sizing : border-box;
`;

const InnerSecondContainer = styled.div`
    min-height : 288px;
    width : 336px;
    height : 100%;
`;

const ThirdContainer = styled.div`
    width: 288px;
    height: 105px;
    padding: 16px 12px 16px 12px;
    gap: 10px;
    border-top: 2px;
    box-sizing : border-box;
`;

interface DashBoardLeftProps {
    activeItem: number; 
    setActiveItem: (id: number) => void; 
    setFilterOpen?: (toggler : boolean) => void;
    filterOpen? : boolean
  }



const DashBoardLeft: React.FC<DashBoardLeftProps> = ({activeItem, setActiveItem, filterOpen}) => {
    
    
  return (
    <Container>
        <FirsTandSecondContainer>
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
                {filterOpen ? 
                (<DashBoardFilter/>)
                :
                (<DashBoardNav activeItem={activeItem} setActiveItem={setActiveItem} />)
                }
            </InnerSecondContainer>
        </SecondContainer>
        </FirsTandSecondContainer>
        <ThirdContainer>
            <PersonInfoComponent
            name='Shivang Patel'
            email='shivangpatel812@gmail.com'
            photo='/ShivangSir.png'

            width='264px'
            height='66px'
            borderRadius='5px'
            background='#E4F4FF'
            border='1px solid #E1E8ED'
            gap='12px'
            padding='12px'

            NameTextWeight='500'
            NameTextColor='#14171A'
            NameTextWidth='185.74'
            NameNumberandEmailGap='8px'

            photoHeight='42px'
            photoWidth='42px'

            fontSize='14px'
            fontStyle='Noto Sans'
            fontWeight='400'
            textColor='#657786'
             />
        </ThirdContainer>
    </Container>
  )
}

export default DashBoardLeft