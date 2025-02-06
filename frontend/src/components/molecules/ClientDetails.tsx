import React, { useState } from "react";
import styled from "styled-components";
import RemoveModal from "./RemoveModal";
import MultiFunctionButtonComponent from "../atoms/MultiFunctionButtonComponent";
import { CloseSVG, disableIconSVG, muteIconSVG } from "../../svg/svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  min-width: 1280px;
  min-height: 832px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000cc;
`;

const MainContainer = styled.div`
  width: 480px;
  height: 398px;
  border-radius: 12px;
  background: #e1e8ed;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

const PhotoContainer = styled.div`
  height: 96px;
  width: 96px;
  position: relative;
  top: 28px;
  border-radius: 1000px;
  border: 3px solid #ffffff;
`;

const Photo = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 1000px;
`;

const ContentContainer = styled.div`
  width: 480px;
  height: 278px;
  margin-top: 120px;
  padding: 54px 36px 24px 36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #f5f8fa;
  border-radius: 12px;
  justify-content: flex-end;
`;

const UserDetailDiv = styled.div`
  width: 408px;
  height: 132px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const UserDescription = styled.div`
  width: 218px;
  height: 80px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MuteandDisableDiv = styled.div`
  height: 28px;
  width: 198px;
  display: flex;
  gap: 16px;
`;

const Name = styled.div`
  width: auto;
  min-width: 159px;
  height: 24px;
  // font-family: Noto Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: #14171a;
`;

const Number = styled.div`
  width: auto;
  min-width: 125px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const Email = styled.div`
  width: 218px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const ButtonContainer = styled.div`
  width: fit-content;
  max-width: 408px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CloseDiv = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  top: 20px;
  left: 442px;
  cursor: pointer;
`;

interface ClientDetailsProps {
  showClientDetails: boolean;
  setShowClientDetails: React.Dispatch<React.SetStateAction<boolean>>;
  client: any;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({
  setShowClientDetails,
  client,
}) => {
  const [removeModal, setRemoveModal] = useState(false);

  const handleCloseMemberDetails = () => {
    setShowClientDetails(false);
  };
  const handleRemoveModal = () => {
    setRemoveModal(true);
  };
  return (
    <Container>
      <MainContainer>
        <CloseDiv onClick={handleCloseMemberDetails}>{CloseSVG}</CloseDiv>
        <ContentContainer>
          <PhotoContainer>
            <Photo src="/ShivangSir.png" />
          </PhotoContainer>
          <UserDetailDiv>
            <UserDescription>
              <Name>{client.name}</Name>
              <Number>+91-{client.contact}</Number>
              <Email>Shivangpatel283@gmail.com</Email>
            </UserDescription>
            <MuteandDisableDiv>
              <MultiFunctionButtonComponent
                width="84px"
                height="28px"
                text="Mute"
                svg={muteIconSVG}
                color="#657786"
                border="1px solid #AAB8C2"
                borderRadius="1000px"
                padding="7px 12px"
                background="transparent"
                gap="10px"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Noto Sans"
              />

              <MultiFunctionButtonComponent
                width="98px"
                height="28px"
                text="Disable"
                svg={disableIconSVG}
                color="#EB5244"
                border="1px solid #EB5244"
                borderRadius="1000px"
                padding="7px 12px"
                background="transparent"
                gap="10px"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Noto Sans"
              />
            </MuteandDisableDiv>
          </UserDetailDiv>
          <ButtonContainer>
            <MultiFunctionButtonComponent
              onClick={handleRemoveModal}
              text="Remove Member"
              background="transparent"
              color="#EB5244"
              height="36px"
              width="408px"
              border="1px solid #EB5244"
              padding="10px 16px"
              fontSize="16px"
            />
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
      {removeModal && (
        <RemoveModal
          member={client}
          setRemovwModal={setRemoveModal}
          removeModal={removeModal}
        />
      )}
    </Container>
  );
};

export default ClientDetails;
