import styled from 'styled-components';
import DashBoardHead from '../../atoms/DashBoardHead';
import TeamMemberComponet from '../../atoms/TeamMemberComponet';


const ContentMainContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 744px;
  min-width : 888px;
  box-sizing : border-box;
  display: flex;
  flex-direction : column;
  gap: 32px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  // border-right: 2px solid #E1E8ED;
  // border-bottom: 2px solid #E1E8ED;
  // border-left: 2px solid #E1E8ED;
`;

const HeadContainer = styled.div`
  width : 100%;
  min-width : 888px;
  height : 60px;
  border-bottom : 1px;
  padding-top : 4px;
  padding-bottom : 4px;
  box-sizing : border-box;
  display : flex;
  gap: 10px;
`;



const BodyContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 652px;
  min-width : 888px;
  display : flex;
  gap : 10px;
  justify-content : center;
`;

const DashBoardContent = () => {  

  return (
    <ContentMainContainer>
      <HeadContainer>
        <DashBoardHead/>
      </HeadContainer>
      <BodyContainer>
       <TeamMemberComponet />
      </BodyContainer>
    </ContentMainContainer>
  )
}

export default DashBoardContent