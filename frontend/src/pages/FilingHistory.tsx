import styled from "styled-components";
import TopNavigatingBar from "../components/molecules/TopNavigatingBar";
import DashBoardHead from "../components/atoms/deprecated/DashBoardHead";
import { exportSVG, FilingHistorySVG, FilterSVG } from "../svg/svg";
import MemberCount from "../components/atoms/MemberCount";
import DropdownComponent from "../components/atoms/DropdownComponent";
import MultiFunctionButtonComponent from "../components/atoms/MultiFunctionButtonComponent";
import { useClientMembers } from "../contexts/ClientMemberContext";
import ClientTable from "../tables/ClientTable";
import { useState } from "react";
import ExportModal from "../components/molecules/ExportModal";
import Layout from "../layout/Layout";

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

const HeadContainer = styled.div`
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

const MemberTableDiv = styled.div``;

interface DashBoardLeftProps {
  activeItem: number;
  setActiveItem: (id: number) => void;
}

const FilingHistory: React.FC<DashBoardLeftProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const headDescription =
    "View Tax filing record of team members to track the efficiency and productivity.";
  const { clientMembers } = useClientMembers();

  const [exportModal, setExportModal] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Layout
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      filterOpen={filterOpen}
      setFilterOpen={setFilterOpen}
    >
      <InnerRightContainer>
        <NavigatingTopBar>
          <TopNavigatingBar/>
        </NavigatingTopBar>
        <ContentContainer>
          <ContentMainContainer>
            <HeadContainer>
              <DashBoardHead
                svg={FilingHistorySVG}
                headTitle="Filing History"
                headDescription={headDescription}
              />
            </HeadContainer>
            <BodyContainer>
              <SearchandFilterContainer>
                <SearchandFilterBlock>
                  <SearchAndFilterDiv>
                    <MemberCount label="Results" count={clientMembers.length} />
                    <SearchFilterandHistoryDiv>
                      <DropdownComponent
                        text="This Month"
                        width="auto"
                        options={[
                          { value: "previous month", label: "Previous Month" },
                          { value: "last 3 months", label: "Last 3 Months" },
                          { value: "last 6 months", label: "Last 6 Months" },
                          { value: "last 1 year", label: "Last 1 Year" },
                        ]}
                      />
                      <MultiFunctionButtonComponent
                        svg={FilterSVG}
                        onClick={() => setFilterOpen(!filterOpen)}
                        text="Filter"
                        height="36px"
                        width="100px"
                        border="1px solid #657786"
                        padding="9px 18px"
                        background="transparent"
                        fontSize="16px"
                        lineHeight="16px"
                        color="#657786"
                        gap="6px"
                      />
                      <MultiFunctionButtonComponent
                        svg={exportSVG}
                        onClick={() => setExportModal(true)}
                        text="Export"
                        height="36px"
                        width="111px"
                        padding="10px 18px"
                        background="#4C9EEB"
                        fontSize="16px"
                        lineHeight="16px"
                        color="#FFFFF"
                        gap="8px"
                      />
                    </SearchFilterandHistoryDiv>
                  </SearchAndFilterDiv>
                </SearchandFilterBlock>
                <MemberTableDiv>
                  <ClientTable />
                </MemberTableDiv>
              </SearchandFilterContainer>
            </BodyContainer>
          </ContentMainContainer>
        </ContentContainer>
      </InnerRightContainer>
      {exportModal && <ExportModal setExportModal={setExportModal} />}
    </Layout>
  );
};

export default FilingHistory;
