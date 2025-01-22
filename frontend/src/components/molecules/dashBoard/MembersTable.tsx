import React, { useState } from 'react';
import styled from 'styled-components';
import { useTeamMembers } from '../../../contexts/TeamMemberContext';
import MemberDetails from '../MemberDetails';

const TableContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 888px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid  #AAB8C2;
  border-radius : 12px;
`;

const StyledTable = styled.table`
`;

const TableHeader = styled.thead`
  width: 888px;
  height: 40px;
  border-radius: 12px;
  // background: #e1e8ed;
  padding: 12px 24px;
  box-sizing: border-box;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  width: 888px;
  height: 68px;
  padding: 18px 24px;
  box-sizing: border-box;
  border-radius: 12px;
  // border-bottom: 1px solid #aab8c2;
`;

const TableCell = styled.td`
  padding: 18px 24px;
  box-sizing : border-box;
  color: #657786;
  height: 32px;
  width: 210px;
  border-radius: 12px;
`;

const NameAndPhoto = styled.div`
  width : fit-content;
  min-width: 126.15px;
  height: 32px;
  padding: 4px 12px 4px 4px;
  box-sizing: border-box;
  display: flex;
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
  gap: 0px;
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

  const headers = (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Contact</TableCell>
      <TableCell>Role</TableCell>
      <TableCell>Action</TableCell>
    </TableRow>
  );

  const rows = teamMembers.map((member) => (
    <TableRow key={member.id}>
      <TableCell>
        <NameAndPhoto onClick={handleMemberDetails}>
          <Photo src={member.photo} />
          <Name>{member.name}</Name>
        </NameAndPhoto>
      </TableCell>
      <TableCell>+91-{member.phoneNumber}</TableCell>
      <TableCell>
        <RoleContainer role={member.role}>{member.role}</RoleContainer>
      </TableCell>
      <TableCell>
        <ActionDiv>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8.48851C15.0001 9.85942 14.5655 11.1954..."
              fill="#657786"
            />
          </svg>
          <ActionText>View History</ActionText>
          <Dropdown>
            <option value="all">All</option>
            <option value="some">Some</option>
          </Dropdown>
        </ActionDiv>
      </TableCell>
    </TableRow>
  ));

  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>{headers}</TableHeader>
        <TableBody>{rows}</TableBody>
      </StyledTable>
      {showMemberDetails && (
        <MemberDetails
          showMemberDetails={showMemberDetails}
          setShowMemberDetails={setShowMemberDetails}
        />
      )}
    </TableContainer>
  );
};

export default MembersTable;
