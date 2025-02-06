import React, { useState } from 'react';
import styled from 'styled-components';
import { useTeamMembers } from '../contexts/TeamMemberContext';
import { historySVG } from '../svg/svg';
import DropdownComponent from '../components/atoms/DropdownComponent';
import DynamicTable from '../components/organism/DynamicTable';
import MemberDetails from '../modals/MemberDetails';
import PersonInfoComponent from '../components/atoms/PersonInfoComponent';



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
`;



const MembersTable: React.FC = () => {
  const { teamMembers } = useTeamMembers();
  const [showMemberDetails, setShowMemberDetails] = useState(false);
  const [member, setMember] = useState({})

  const handleMemberDetails = (member : any) => {
    setShowMemberDetails(true);
    setMember(member)
  };

  

  const headers = ['Name', 'Contact', 'Role' , 'Action']

  const rows = teamMembers.map((member) => [
    <PersonInfoComponent
    onClick={()=>handleMemberDetails(member)}
    name={member.name}
    photo={member.photo} 

    gap='6px'
    NameTextColor='#14171A'
    NameTextSize='16px'
    NameTextWeight='500'
    />,
    <Number>{member.phoneNumber}</Number>,
    <RoleContainer role={member.role}> {member.role} </RoleContainer>,
    <ActionDiv>
      <DropdownComponent
      svg={historySVG}
      text='View History'
      height='32px'
      width='160px'
      color='#657786'
      fontSize='16px'
      fontWeight={500}
      fontStyle='Noto Sans'
      />
    </ActionDiv>,
  ]);

  return (
    <div>
      <DynamicTable headers={headers} rows={rows} width="100%" height="auto" />
      {showMemberDetails && (
        <MemberDetails
          showMemberDetails={showMemberDetails}
          setShowMemberDetails={setShowMemberDetails}
          member={member}
        />
      )}
    </div>
  );
};

export default MembersTable;
