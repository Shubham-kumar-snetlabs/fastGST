import React from 'react';
import styled from 'styled-components';
import { useClientMembers } from '../contexts/ClientMemberContext';
import DynamicTable from '../components/organism/DynamicTable';





const Client = styled.div`
  width : 100%;
  min-width: 140px;
  height: 16px;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A;

`;

const Business = styled.div`
    display : flex;
    flex-direction : column;
    gap : 6px;
    width : 140px;
    height : 36px;
`;
const BusinessName = styled.div`
    width : 140px;
    height : 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;
`;
const BusinessNumber = styled.div`
    width : 140px;
    height : 14px;
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const FilingType = styled.div`
  width: fit-content;
  min-width: 140px
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;

const GSTPeriod = styled.div`
    width : 140px;
    height : 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const FiledBy = styled.div`
    width : 140px;
    height : 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const FiledAt = styled.div`
    width : 140px;
    height : 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;



const MembersTable: React.FC = () => {
  const { clientMembers } = useClientMembers();
  
  const headers = ['Client', 'Business', 'Filing Type' , 'GST Period', 'Filed by', 'Filed at']

  const rows = clientMembers.map((member) => [
    <Client>{member.client}</Client>,
    <Business>
        <BusinessName>{member.business}</BusinessName>
        <BusinessNumber>{member.businessNumber}</BusinessNumber>
    </Business>,
    <FilingType>{member.filingType} </FilingType>,
    <GSTPeriod>{member.gstPeriod}</GSTPeriod>,
    <FiledBy>{member.filedBy}</FiledBy>,
    <FiledAt>{member.filedAt}</FiledAt>
  ]);

  return (
    <div>
      <DynamicTable headers={headers} rows={rows} width="100%" height="auto" />
    </div>
  );
};

export default MembersTable;
