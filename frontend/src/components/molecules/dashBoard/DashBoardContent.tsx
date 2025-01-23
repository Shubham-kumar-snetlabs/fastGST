import styled from 'styled-components';
import DashBoardHead from '../../atoms/DashBoardHead';
import TeamMemberComponet from '../../atoms/TeamMemberComponet';
import { headIconSVG } from '../../../svg/svg';


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



  const headDescription = "Manage and organize your team members for efficient collaboration.";

  return (
    <ContentMainContainer>
      <HeadContainer>
        <DashBoardHead
        svg={headIconSVG}
        headTitle="Team"
        headDescription={headDescription}
        />
      </HeadContainer>
      <BodyContainer>
       <TeamMemberComponet />
      </BodyContainer>
    </ContentMainContainer>
  )
}

export default DashBoardContent