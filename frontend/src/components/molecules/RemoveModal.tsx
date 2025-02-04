import ConfirmationModal from "./ConfirmationModal";
import { binSVG } from "../../svg/svg";

interface ModalProps {
    member: any;
    removeModal: boolean;
    business?: any;
    setRemovwModal: React.Dispatch<React.SetStateAction<boolean>>;
  }



const Example:React.FC<ModalProps> = ({member,setRemovwModal,business}) => {
  const handleCancel = () => {
    setRemovwModal(false)
  };

  const handleRemove = () => {
    console.log("Remove clicked");
  };

  const description = 
  <>
  Are you sure you want to remove{" "} 
  <span style={{ color: "#14171A" }}>
    { member?.name } 
    { business && <span>'s{" "}</span> } 
    { business?.name }
  </span> from your team?
  </>

  return (
    <ConfirmationModal
      title="Remove Member?"
      description={description}
      svgContent={binSVG}
      buttons={[
        {
          text: "Cancel",
          onClick: handleCancel,
          styles: { background: "#AAB8C2", color: "#14171A", width:'408px', height:'42px'},
        },
        {
          text: "Remove",
          onClick: handleRemove,
          styles: { background: "#EB5244", color: "#FFFFFF", width:'408px', height:'42px' },
        },
      ]}
    />
  );
};

export default Example;
