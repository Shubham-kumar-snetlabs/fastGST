import styled from "styled-components";
import TopNavigatingBar from "../components/molecules/TopNavigatingBar";
import { FilterSVG, headIconSVG, SearchSVG } from "../svg/svg";
import MemberCount from "../components/atoms/MemberCount";
import SearchComponent from "../components/atoms/SearchComponent";
import DropdownComponent from "../components/atoms/DropdownComponent";
import MultiFunctionButtonComponent from "../components/atoms/MultiFunctionButtonComponent";
import { useNavigate } from "react-router-dom";
import { useTeamMembers } from "../contexts/TeamMemberContext";
import MembersTable from "../tables/MembersTable";
import DashBoardTitle from "../components/atoms/deprecated/DashBoardHead";
import DashBoardBody from "../components/atoms/deprecated/DashBoardBody";
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

interface DashBoardLeftProps {
  activeItem: number;
  setActiveItem: (id: number) => void;
}

const SearchandFilterBlock = styled.div``;

const TableDiv = styled.div``;

const Dashboard: React.FC<DashBoardLeftProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const headDescription =
    "Manage and organize your team members for efficient collaboration.";

  const navigate = useNavigate();
  const { teamMembers } = useTeamMembers();

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
                svg={headIconSVG}
                headTitle="Team"
                headDescription={headDescription}
              />
            </TitleContainer>
            <BodyContainer>
              <SearchandFilterContainer>
                <SearchandFilterBlock>
                  {teamMembers.length && (
                    <SearchAndFilterDiv>
                      <MemberCount
                        label="All Members"
                        count={teamMembers.length}
                      />
                      <SearchFilterandHistoryDiv>
                        <SearchComponent
                          svg={SearchSVG}
                          placeholder="Search a Team member..."
                        />
                        <DropdownComponent
                          svg={FilterSVG}
                          text="Filter"
                          width="auto"
                          options={[
                            { value: "owner", label: "Owner" },
                            { value: "super admin", label: "Super Admin" },
                            { value: "admin", label: "Admin" },
                            { value: "member", label: "Member" },
                          ]}
                        />
                        <MultiFunctionButtonComponent
                          onClick={() => navigate("filing")}
                          text="Filling History"
                          height="36px"
                          width="137px"
                          padding="10px 18px"
                          background="#4C9EEB"
                          fontSize="16px"
                          lineHeight="16px"
                        />
                      </SearchFilterandHistoryDiv>
                    </SearchAndFilterDiv>
                  )}
                </SearchandFilterBlock>
                <TableDiv>
                  {teamMembers.length ? (
                    <MembersTable />
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

export default Dashboard;
