import { bigExportSVG } from "../../svg/svg";
import ConfirmationModal from "./ConfirmationModal";

interface ExportProps {
  setExportModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExportModal: React.FC<ExportProps> = ({ setExportModal }) => {
  const description = (
    <>Are you sure want to export filing history as a file?</>
  );

  const handleCancel = () => {
    console.log("Cancel Clicked");
    setExportModal(false);
  };

  const handleExport = () => {
    console.log("Export Clicked");
  };
  return (
    <ConfirmationModal
      title="Export History"
      description={description}
      svgContent={bigExportSVG}
      buttons={[
        {
          text: "Cancel",
          onClick: handleCancel,
          styles: {
            background: "#AAB8C2",
            color: "#14171A",
            width: "408px",
            height: "42px",
          },
        },
        {
          text: "Export as File",
          onClick: handleExport,
          styles: {
            background: "#4C9EEB",
            color: "#FFFFFF",
            width: "408px",
            height: "42px",
          },
        },
      ]}
    />
  );
};

export default ExportModal;
