import React, { useState } from 'react';
import styled from 'styled-components';
import DynamicTable from '../components/organism/DynamicTable';
import { useBusiness } from '../contexts/BusinessContext';
import DropdownComponent from '../components/atoms/DropdownComponent';
import { CloseSVG, PlayIconSVG } from '../svg/svg';
import { useNavigate } from 'react-router-dom';
import RemoveModal from "../components/molecules/RemoveModal";





const Client = styled.div`
  width : 100%;
  min-width: 85px;
  height: 32px;
  padding : 4px 12px;
  display : flex;
  align-items : center;
  gap : 6px;
  background : transparent;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A;
`;

const ClientsFirstText = styled.div `
    height : 24px;
    width : 24px;
    border-radius : 1000px;
    background : #E1E8ED;
    color : #FFFFFF;
    display : flex;
    justify-content : center;
    align-items : center;

    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;



const GST_No = styled.div`
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

const LastFiled = styled.div`
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

interface BusinessTableProps{
    client : any;
}



const BusinessTable: React.FC<BusinessTableProps> = ({client}) => {
  const { business } = useBusiness();
  const naviagte = useNavigate();
  
  const headers = ['Name', 'GST No.', 'Last Filed' , 'Action',]
  const [removeModal, setRemoveModal] = useState(false)
  const [businessState, setBusinessState] = useState(null)

  const handleStartFiling = (item : any)=>{
    // console.log("Item is :",item);
    setBusinessState(item)
    console.log(client);
    
    // console.log("businessState is :",businessState);
    naviagte('/business_filing',{ state: { businessState, client } })
  }

  const handleRemoveClient  = (item : any)=>{
    console.log('Remove Client', business);
    setRemoveModal(true)
    setBusinessState(item)
  }

  const rows = business.map((item) => [
    <Client>
        <ClientsFirstText>{item.name[0]}</ClientsFirstText>
        {item.name}
    </Client>,
    <GST_No>{item.gstNo} </GST_No>,
    <LastFiled>{item.lastFiled}</LastFiled>,
    <DropdownComponent
    text='Start Filing'
    svg = {PlayIconSVG}
    height='32px'
    width='fit-content'
    gap='4px'
    padding='8px 12px' 
    options={[
        { value: "start filing", label: "Start Filing", svg:PlayIconSVG, onClick : ()=>handleStartFiling(item) },
        { value: "remove client", label: "Remove client", svg: CloseSVG, onClick : ()=>handleRemoveClient(item) },
    ]}
    />
  ]);

  return (
    <div>
      <DynamicTable headers={headers} rows={rows} width="100%" height="auto" />
      {removeModal && <RemoveModal member = {client} removeModal={removeModal} setRemovwModal={setRemoveModal} business={businessState}/>}
    </div>
  );
};

export default BusinessTable;
