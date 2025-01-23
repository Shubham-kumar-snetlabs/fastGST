import React, { useState } from 'react';
import styled from 'styled-components';
import { useTeamMembers } from '../../../contexts/TeamMemberContext';
import MemberDetails from '../MemberDetails';
import DynamicTable from '../../organism/DynamicTable';
import { historySVG } from '../../../svg/svg';



const NameAndPhoto = styled.div`
  width : fit-content;
  min-width: 126.15px;
  height: 32px;
  padding: 4px 12px 4px 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 100px;
  border: 1px solid #aab8c2;
  cursor: pointer;
`;

const Photo = styled.img`
  width: 24.15px;
  height: 24px;
  gap: 0px;
  border-radius: 1000px;
`;

const Name = styled.div`
  width : 100%;
  min-width: 80px;
  height: 16px;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A;

`;

const Number = styled.div`
  width : fit-content;
  min-width : 210px;
  height : 16px;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

const RoleContainer = styled.div<{ role: string }>`
  width: fit-content;
  height: 32px;
  padding: 8px 12px 8px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: ${({ role }) =>
    role === 'Admin'
      ? '#DFAEF6'
      : role === 'Super Admin'
      ? '#F6DBAA'
      : role === 'Owner'
      ? '#F1B69A'
      : '#91C4E0'};
`;

const ActionDiv = styled.div`
  width: 160px;
  height: 32px;
  padding: 8px 12px 8px 12px;
  box-sizing: border-box;
  border-radius: 200px;
  border: 1px solid #aab8c2;
  display: flex;
  gap: 6px;
`;

const ActionText = styled.div`
  width: 115px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #657786;
  box-sizing: border-box;
`;

const Dropdown = styled.select`
  width: 16px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  color: #657786;
  background: #f5f8fa;
  border: none;
  outline: none;

  option {
    font-size: 14px;
    color: #657786;
    background: transparent;
    width: 100%;
    padding: 2px;
    box-sizing: border-box;
    border-radius: 100px;
  }
`;

const MembersTable: React.FC = () => {
  const { teamMembers } = useTeamMembers();
  const [showMemberDetails, setShowMemberDetails] = useState(false);

  const handleMemberDetails = () => {
    setShowMemberDetails(true);
  };

  

  const headers = ['Name', 'Contact', 'Role' , 'Action']

  const rows = teamMembers.map((member) => [
    <NameAndPhoto onClick={handleMemberDetails}>
      <Photo src={member.photo} alt={member.name} />
      <Name>{member.name}</Name>
    </NameAndPhoto>,

    <Number>+91-{member.phoneNumber}</Number>,

    <RoleContainer role={member.role}> {member.role} </RoleContainer>,

    <ActionDiv>
      {historySVG}
      <ActionText>View History</ActionText>
      <Dropdown>
        <option value="all">All</option>
        <option value="some">Some</option>
      </Dropdown>
    </ActionDiv>,
  ]);

  return (
    <div>
      <DynamicTable headers={headers} rows={rows} width="100%" height="auto" />
      {showMemberDetails && (
        <MemberDetails
          showMemberDetails={showMemberDetails}
          setShowMemberDetails={setShowMemberDetails}
        />
      )}
    </div>
  );
};

export default MembersTable;
