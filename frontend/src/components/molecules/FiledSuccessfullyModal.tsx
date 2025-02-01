import ConfirmationModal from "./ConfirmationModal";
import { binSVG, ThumbsUpSVG } from "../../svg/svg";
import styled from "styled-components";


const DescriptionContainer = styled.div`
    height : ;
    width : ;
    display : flex;
    flex-direction : column;
    gap : 10px;
`;

const Desc1 = styled.div`
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 18.9px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;

interface ModalProps {
    member: any;
    successModal: boolean;
    business?: any;
    setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  }



const FiledSuccessfullyModal:React.FC<ModalProps> = ({member,setSuccessModal,business}) => {
  const handleCancel = () => {
    setSuccessModal(false)
  };

  const handleRemove = () => {
    console.log("Remove clicked");
  };

  const description = 
 <DescriptionContainer>
    <Desc1>Have you successfully complete the GST filing?</Desc1>
    <Desc1>Clicking <span style={{color:'#14171A', fontFamily:'Noto Sans', fontWeight:'400'}}>'Yes' </span> will update the filing history and notify the client.</Desc1>
 </DescriptionContainer>

  return (
    <ConfirmationModal
      title="Filed Successfully?"
      description={description}
      svgContent={ThumbsUpSVG}
      containerStyles={{width:'480px', height:'377px', padding:'24px 36px'}}
      buttons={[
        {
          text: "No",
          onClick: handleCancel,
          styles: { background: "#AAB8C2", color: "#14171A", width:'408px', height:'42px'},
        },
        {
          text: "Yes",
          onClick: handleRemove,
          styles: { background: "#4C9EEB", color: "#FFFFFF", width:'408px', height:'42px' },
        },
      ]}
    />
  );
};

export default FiledSuccessfullyModal;
