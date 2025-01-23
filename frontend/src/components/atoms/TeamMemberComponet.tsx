import styled from 'styled-components';
import DashBoardBody from './DashBoardBody';
import SearchandFilterContent from './SearchandFilterContent';
import MembersTable from '../molecules/dashBoard/MembersTable';
import { useTeamMembers } from '../../contexts/TeamMemberContext';
import React from 'react';

const Container = styled.div`
    width : 100%;
    height : 100%;
    min-width : 888px;
    min-height : 652px;
    display : flex;
    flex-direction : column;
    padding-top : 24px;
    box-sizing : border-box;
    gap : 36px;`;

const SearchandFilterBlock = styled.div`
`;

const MemberTableDiv = styled.div`
`;




const TeamMemberComponet:React.FC = () => {

    const { teamMembers } = useTeamMembers();

  if (teamMembers.length === 0) {
    return <DashBoardBody />;
  }

  return (
    <Container>
      <SearchandFilterBlock>
        <SearchandFilterContent/>
      </SearchandFilterBlock>
      <MemberTableDiv>
        <MembersTable/>
      </MemberTableDiv>
    </Container>
  );
};

export default TeamMemberComponet;
