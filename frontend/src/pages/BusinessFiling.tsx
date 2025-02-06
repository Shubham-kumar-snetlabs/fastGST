import styled from "styled-components";
import TopNavigatingBar from "../components/molecules/TopNavigatingBar";
import { BusinessIconSVG, CyberIconSVG, DefensiveIconSVG } from "../svg/svg";
import { useLocation, useNavigate } from "react-router-dom";
import DashBoardTitle from "../components/atoms/deprecated/DashBoardHead";
import Layout from "../layout/Layout";
import PersonInfoComponent from "../components/atoms/PersonInfoComponent";
import { useState } from "react";
import MultiFunctionButtonComponent from "../components/atoms/MultiFunctionButtonComponent";
import DropdownComponent from "../components/atoms/DropdownComponent";

const InnerRightContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 984px;
  min-height: 824px;
  display: flex;
  flex-direction: column;
`;

const NavigatingTopBar = styled.div`
  width: 100%;
  min-width: 984px;
  height: 48px;
  background: #f5f8fa;
  border: 2px solid #e1e8ed;
  border-radius: 16px 16px 0 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  min-width: 984px;
  min-height: 768px;
  border-right: 2px solid #e1e8ed;
  border-bottom: 2px solid #e1e8ed;
  border-left: 2px solid #e1e8ed;
  display: flex;
  gap: 10px;
  padding: 32px 48px 0 48px;
  box-sizing: border-box;
  background: #f5f8fa;
`;

const ContentMainContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 736px;
  min-width: 888px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const TitleContainer = styled.div`
  width: 100%;
  min-width: 888px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 660px;
  min-width: 888px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 24px;
  box-sizing: border-box;
  align-items: center;
`;

const EndToEndEncryptedDiv = styled.div`
  width: 163px;
  height: 16px;
  display: flex;
  gap: 8px;
  align-items: center;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 300;
  line-height: 12px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
  white-space: nowrap;
`;

const BodyMainContainer = styled.div`
  width: 276px;
  height: 301px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const InnerMainContainer = styled.div`
  width: 276px;
  height: 237px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 277px;
  height: 27px;

  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 27.24px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const DropdownDiv = styled.div`
  width: 276px;
  height: 54px;
`;

const DescriptionDiv = styled.div`
  width: 276px;
  height: 42px;
`;

const Description1 = styled.div`
  width: 276px;
  height: 19px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const Description2 = styled.div`
  width: 276px;
  height: 19px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const ButtonDiv = styled.div``;

interface DashBoardLeftProps {
  activeItem: number;
  setActiveItem: (id: number) => void;
}

const BusinessFiling: React.FC<DashBoardLeftProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { businessState, client } = location.state || {};
  console.log(businessState);

  const [showClientDetails, setShowClientDetails] = useState(false);

  return (
    <Layout activeItem={activeItem} setActiveItem={setActiveItem}>
      <InnerRightContainer>
        <NavigatingTopBar>
          <TopNavigatingBar />
        </NavigatingTopBar>
        <ContentContainer>
          <ContentMainContainer>
            <TitleContainer>
              <DashBoardTitle
                svg={BusinessIconSVG}
                headTitle={businessState?.name}
                headDescription={businessState?.gstNo}
              />
              <PersonInfoComponent
                name={client?.name}
                photo={client?.photo}
                background="#E4F4FF"
                width="105.15px"
                height="32px"
                onClick={() => setShowClientDetails(true)}
              />
            </TitleContainer>
            <BodyContainer>
              <EndToEndEncryptedDiv>
                {DefensiveIconSVG} End-to-End Encrypted{" "}
              </EndToEndEncryptedDiv>
              <BodyMainContainer>
                {CyberIconSVG}
                <InnerMainContainer>
                  {!showClientDetails && <TitleDiv>Receive OTP from Elon Musk?</TitleDiv>}
                  <DropdownDiv>
                    <DropdownComponent
                      height="54px"
                      width="276px"
                      borderRadius="4px"
                      text="GST Type"
                      borderColor="#AAB8C2"
                      background="#F5F8FA"
                      justifyContent="space-between"
                      options={[
                        { value: "r1", label: "R1" },
                        { value: "r2", label: "R2" },
                        { value: "r3", label: "R3" },
                      ]}
                    />
                  </DropdownDiv>
                  <DescriptionDiv>
                    <Description1>
                      {" "}
                      Click button below and wait untill{" "}
                    </Description1>
                    <Description2>
                      we forward you client’s GST OTP.
                    </Description2>
                  </DescriptionDiv>
                  <ButtonDiv>
                    <MultiFunctionButtonComponent
                      text="Receive OTP"
                      width="276px"
                      height="42px"
                      fontFamily="Noto Sans"
                      fontWeight="500"
                      fontSize="18px"
                      color="#FFFFFF"
                      background="#4C9EEB"
                      padding="12px 16px"
                      onClick={() => navigate("gst-filed")}
                    />
                  </ButtonDiv>
                </InnerMainContainer>
              </BodyMainContainer>
            </BodyContainer>
          </ContentMainContainer>
        </ContentContainer>
      </InnerRightContainer>
    </Layout>
  );
};

export default BusinessFiling;
