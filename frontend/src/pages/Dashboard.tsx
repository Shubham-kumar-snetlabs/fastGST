import styled from 'styled-components'
import DashBoardLeft from '../components/molecules/dashBoard/DashBoardLeft';
import TopNavigatingBar from '../components/molecules/dashBoard/TopNavigatingBar';
import DashBoardContent from '../components/molecules/dashBoard/DashBoardContent';

const Container = styled.div`
  height : 100vh;
  width : 100vw;
  background : #fffff9 ;
  display : flex;
  justify-content : center;
  align-items : center;
  overflow : hidden;
`;

const MainContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 832px;
  min-width : 1280px;
  display :flex;
`;

const LeftContainer = styled.div`
  height : 100%;
  width : auto;
  min-height : 832px;
  max-width : 288px;
  background : #E1E8ED;
`;

const RightContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 832px;
  min-width : 992px;
  background : #E1E8ED;
  display : flex;
  gap : 10px;
  box-sizing : border-box;
  padding : 8px 8px 8px 0;
`;

const InnerRightContainer = styled.div`
  height : 100%;
  width : 100%;
  min-width : 984px;
  min-height : 824px;
  diplay : flex;
  flex-direction : column;
`;

const NavigatingTopBar = styled.div`
  width : 100%;
  min-width : 984px;
  height : 48px;
  background : #F5F8FA;
  border : 2px solid #E1E8ED;
  border-radius : 16px 16px 0 0;
  box-sizing : border-box;
`;



const ContentContainer = styled.div`
  height : 100%;
  width : 100%;
  min-width : 984px;
  min-height : 776px;
  border-right: 2px solid #E1E8ED;
  border-bottom: 2px solid #E1E8ED;
  border-left: 2px solid #E1E8ED;
  display : flex;
  gap : 10px;
  padding : 32px 48px 0 48px;
  box-sizing : border-box;
  background: #F5F8FA;
`;

const Dashboard = () => {
  return (
    <Container>
      <MainContainer>
        <LeftContainer>
          <DashBoardLeft/>
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <NavigatingTopBar>
              <TopNavigatingBar/>
            </NavigatingTopBar>
            <ContentContainer>
              <DashBoardContent/>
            </ContentContainer>
          </InnerRightContainer>
        </RightContainer>
      </MainContainer>
    </Container>
  )
}

export default Dashboard