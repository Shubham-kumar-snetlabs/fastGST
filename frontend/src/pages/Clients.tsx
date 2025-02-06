import styled from "styled-components";
import TopNavigatingBar from "../components/molecules/TopNavigatingBar";
import { ClientSmallIconSVG, SearchSVG } from "../svg/svg";
import MemberCount from "../components/atoms/MemberCount";
import SearchComponent from "../components/atoms/SearchComponent";
import DashBoardTitle from "../components/atoms/deprecated/DashBoardHead";
import DashBoardBody from "../components/atoms/deprecated/DashBoardBody";
import { useClients } from "../contexts/ClientsContext";
import ClientsTable from "../tables/ClientsTable";
import Layout from "../layout/Layout";
import { useState } from "react";

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
  min-height: 776px;
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
  min-height: 744px;
  min-width: 888px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const TitleContainer = styled.div`
  width: 100%;
  min-width: 888px;
  height: 60px;
  border-bottom: 1px;
  padding-top: 4px;
  padding-bottom: 4px;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 652px;
  min-width: 888px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const SearchandFilterContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 888px;
  min-height: 652px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  box-sizing: border-box;
  gap: 36px;
`;

const SearchAndFilterDiv = styled.div`
  min-width: 888px;
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchFilterandHistoryDiv = styled.div`
  height: 36px;
  width: 495px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

const SearchandFilterBlock = styled.div``;

const TableDiv = styled.div``;

interface DashBoardLeftProps {
  activeItem: number;
  setActiveItem: (id: number) => void;
}

const Clients: React.FC<DashBoardLeftProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const headDescription =
    "Effortlessly manage your clients and their businesses by automatically receiving your client’s business OTPs for streamlining the tax filing process.";

  const { clients } = useClients();

  const [currentStep, setCurrentStep] = useState(1);
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
                svg={ClientSmallIconSVG}
                headTitle="Clients"
                headDescription={headDescription}
              />
            </TitleContainer>
            <BodyContainer>
              <SearchandFilterContainer>
                <SearchandFilterBlock>
                  {clients.length && (
                    <SearchAndFilterDiv>
                      <MemberCount label="All Clients" count={clients.length} />
                      <SearchFilterandHistoryDiv>
                        <SearchComponent
                          svg={SearchSVG}
                          placeholder="Search a Team member..."
                        />
                      </SearchFilterandHistoryDiv>
                    </SearchAndFilterDiv>
                  )}
                </SearchandFilterBlock>
                <TableDiv>
                  {clients.length ? (
                    <ClientsTable />
                  ) : (
                    <DashBoardBody
                      type="team"
                      setCurrentStep={setCurrentStep}
                      currentStep={currentStep}
                    />
                  )}
                </TableDiv>
              </SearchandFilterContainer>
            </BodyContainer>
          </ContentMainContainer>
        </ContentContainer>
      </InnerRightContainer>
    </Layout>
  );
};

export default Clients;
