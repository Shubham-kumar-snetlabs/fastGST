import React, { useState } from 'react';
import styled from 'styled-components';
import { useTeamMembers } from '../../../contexts/TeamMemberContext';
import MemberDetails from '../MemberDetails';
import DynamicTable from '../../atoms/DynamicTable';



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

  const historySVG = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 8.48851C15.0001 9.85942 14.5655 11.1954 13.7583 12.306C12.9511 13.4166 11.8124 14.2452 10.5045 14.6737C9.19656 15.1023 7.78616 15.1088 6.47428 14.6925C5.16239 14.2762 4.01595 13.4582 3.19835 12.3551L4.00826 11.7591C4.74716 12.7583 5.80318 13.4798 7.0053 13.807C8.20742 14.1341 9.48526 14.0477 10.6319 13.5617C11.7785 13.0756 12.7268 12.2185 13.3231 11.129C13.9195 10.0395 14.129 8.78146 13.9178 7.55864C13.7066 6.33582 13.0869 5.21978 12.1593 4.39127C11.2316 3.56276 10.0502 3.07027 8.80634 2.99357C7.56251 2.91688 6.32908 3.26045 5.30581 3.96866C4.28254 4.67687 3.52933 5.70825 3.16816 6.89578L3.67122 6.57022L4.23464 7.40165L2.72548 8.40336C2.63655 8.46305 2.5308 8.49289 2.42364 8.48851C2.34124 8.48863 2.26007 8.4686 2.18727 8.43017C2.11446 8.39175 2.05225 8.3361 2.00611 8.26813L1 6.76556L1.83507 6.20459L2.17715 6.70545C2.61361 5.19997 3.58072 3.9017 4.90102 3.04887C6.22131 2.19604 7.80622 1.84586 9.36491 2.0626C10.9236 2.27934 12.3515 3.04846 13.3866 4.22881C14.4217 5.40916 14.9945 6.92158 15 8.48851ZM7.95724 4.9825V8.48851C7.95686 8.55443 7.96955 8.61977 7.99458 8.68079C8.01962 8.74182 8.0565 8.79732 8.10313 8.84412L9.61229 10.3467L10.3266 9.63548L8.96335 8.28316V4.9825H7.95724Z" fill="#657786"/>
  </svg>

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
