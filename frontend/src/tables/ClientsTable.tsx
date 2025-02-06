import React, { useState } from 'react';
import styled from 'styled-components';
import DynamicTable from '../components/organism/DynamicTable';
import PersonInfoComponent from '../components/atoms/PersonInfoComponent';
import { useClients } from '../contexts/ClientsContext';
import MultiFunctionButtonComponent from '../components/atoms/MultiFunctionButtonComponent';
import { arrowNextSVG } from '../svg/svg';
import ClientDetails from '../components/molecules/ClientDetails';
import { useNavigate } from 'react-router-dom';



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

const BusinessDiv = styled.div`
    width : 210px;
    height : 16px;
`;

const ActionDiv = styled.div`
    width : 210px;
    height : 32px;
    display : flex;
    gap : 10px;
`;




const ClientsTable: React.FC = () => {
  const { clients } = useClients();
  const [showClientDetails, setShowClientDetails] = useState(false);
  const [client, setClient] = useState({})

  const navigate = useNavigate();

  const handleClientDetails = (client : any) => {
    setShowClientDetails(true);
    setClient(client)
  };

const handleGotoBusiness = (client : any) => {
  console.log('Go to business Clicked');
  navigate('business',{state:{client}})
}
  

  const headers = ['Name', 'Contact', 'Business' , 'Action']

  const rows = clients.map((client) => [
    <PersonInfoComponent
    onClick={()=>handleClientDetails(client)}
    name={client.name}
    photo={client.photo} 

    gap='6px'
    NameTextColor='#14171A'
    NameTextSize='16px'
    NameTextWeight='500'
    />,
    <Number>+91-{client.contact}</Number>,
    <BusinessDiv>{client.business}</BusinessDiv>,
    <ActionDiv>
      <MultiFunctionButtonComponent 
      height='32px'
      width='161px'
      borderRadius='200px'
      border='1px solid #AAB8C2'
      padding='8px 14px'
      gap='4px'
      text='Go to business'
      color='#657786'
      background='transparent'
      fontSize='16px'
      svg = {arrowNextSVG}
      flexDirection='row-reverse'
      onClick={()=>handleGotoBusiness(client)}
      />
    </ActionDiv>,
  ]);

  return (
    <div>
      <DynamicTable headers={headers} rows={rows} width="100%" height="auto" />
      {showClientDetails && (
        <ClientDetails
        showClientDetails={showClientDetails}
        setShowClientDetails={setShowClientDetails}
        client={client}
        />
      )}
    </div>
  );
};

export default ClientsTable;
