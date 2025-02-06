import { useState } from "react";
import styled from "styled-components";
import {
  crossInCircleSVG,
  crossSVG,
  DropdownSVG,
  SearchSVG,
} from "../../svg/svg";
import MultiFunctionButtonComponent from "../atoms/MultiFunctionButtonComponent";
import SearchComponent from "../atoms/SearchComponent";

const Container = styled.div`
  width: 288px;
  height: 100%;
  min-height: 631px;
  padding: 8px 0;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
`;

const InnerContainer = styled.div`
  width: 288px;
  height: 100%;
  min-height: 615px;
  border-radius: 8px 0 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #e1e8ed;
`;

const FilterBy = styled.div`
  width: fit-content;
  min-width: 288px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  padding: 7px 16px;
  box-sizing: border-box;
`;

const FilterByTextDiv = styled.div`
  width: 140px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const FilterBySVGDiv = styled.div`
  width: 18px;
  height: 18px;
`;

const CustomizableFilterandButtonDiv = styled.div`
  width: fit-content;
  min-width: 288px;
  min-height: 575px;
  // min-height : 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
`;

const CustomizableFilterDiv = styled.div`
  width: 256px;
  height: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonDiv = styled.div`
  width: 256px;
  height: 88px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ClientFilterDiv = styled.div`
    width : 256px;
    height : 100%
    min-height : 76px;
    display : flex;
    flex-direction : column;
    gap : 8px;
`;

const ClientandDropdown = styled.div`
  width: 100%;
  min-width: 256px;
  height: 16px;
  display: flex;
  justify-content: space-between;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const ClientSearch = styled.div`
  width: 256px;
  height: 34px;
  border-bottom: 1px solid #657786;
  display: flex;
  align-items: center;
`;

const ClientSearched = styled.div`
  width: fit-content;
  min-width: 76px;
  height: 20px;
  border-radius: 12px;
  display: flex;
  gap: 2px;
  align-items: center;
  padding: 2px 4px;
  background: #b9dcf7;
  color: #1da1f2;

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const FilingTypeContainer = styled.div`
    width : 256px;
    height : 100%
    min-height : 44px;
    display : flex;
    flex-direction : column;
    gap : 8px;
`;

const FilingTypeDiv = styled.div`
  width: 256px;
  height: auto;
  display: flex;
  gap: 4px;
`;

const FilingTypes = styled.div<{ isSelected: boolean }>`
  width: auto;
  min-width: 22px;
  height: auto;
  min-height: 20px;
  border-radius: 12px;
  padding: 4px;
  box-sizing: border-box;
  background: ${({ isSelected }) => (isSelected ? "#B9DCF7" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#1DA1F2" : "#657786")};
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const DashBoardFilter = () => {
  const [selectedFilingType, setSelectedFilingType] = useState<string | null>(
    null
  );

  const handleFilingTypeClick = (type: string) => {
    setSelectedFilingType(type === selectedFilingType ? null : type);
  };
  return (
    <Container>
      <InnerContainer>
        <FilterBy>
          <FilterByTextDiv>Filter by</FilterByTextDiv>
          <FilterBySVGDiv>{crossSVG}</FilterBySVGDiv>
        </FilterBy>
        <CustomizableFilterandButtonDiv>
          <CustomizableFilterDiv>
            <ClientFilterDiv>
              <ClientandDropdown>Client {DropdownSVG}</ClientandDropdown>
              <ClientSearch>
                <SearchComponent
                  background="transparent"
                  height="24px"
                  width="256px"
                  placeholder="Search Client"
                  svg={SearchSVG}
                  color="#14171A"
                  borderColor="transparent"
                  fontSize="12px"
                  fontWeight={400}
                  fontStyle="normal"
                />
              </ClientSearch>
              <ClientSearched>Bill Gates {crossInCircleSVG}</ClientSearched>
            </ClientFilterDiv>
            <ClientFilterDiv>
              <ClientandDropdown>Business {DropdownSVG}</ClientandDropdown>
              <ClientSearch>
                <SearchComponent
                  background="transparent"
                  height="24px"
                  width="256px"
                  placeholder="Search by GST no. or business name"
                  svg={SearchSVG}
                  color="#14171A"
                  borderColor="transparent"
                  fontSize="12px"
                  fontWeight={400}
                  fontStyle="normal"
                />
              </ClientSearch>
              <ClientSearched>Microsoft {crossInCircleSVG}</ClientSearched>
            </ClientFilterDiv>
            <FilingTypeContainer>
              <ClientandDropdown>Filing Type {DropdownSVG}</ClientandDropdown>
              <FilingTypeDiv>
                {["R1", "R2", "R3", "Others"].map((type) => (
                  <FilingTypes
                    key={type}
                    isSelected={selectedFilingType === type}
                    onClick={() => handleFilingTypeClick(type)}
                  >
                    {type}
                  </FilingTypes>
                ))}
              </FilingTypeDiv>
            </FilingTypeContainer>
            <ClientFilterDiv>
              <ClientandDropdown>Team Member {DropdownSVG}</ClientandDropdown>
              <ClientSearch>
                <SearchComponent
                  background="transparent"
                  height="24px"
                  width="256px"
                  placeholder="Search Team Member"
                  svg={SearchSVG}
                  color="#14171A"
                  borderColor="transparent"
                  fontSize="12px"
                  fontWeight={400}
                  fontStyle="normal"
                />
              </ClientSearch>
              <ClientSearched>Lokesh Kumar {crossInCircleSVG}</ClientSearched>
            </ClientFilterDiv>
          </CustomizableFilterDiv>

          <ButtonDiv>
            <MultiFunctionButtonComponent
              text="Clear"
              width="256px"
              height="36px"
              background="#AAB8C2"
              gap="10px"
              padding="10px 16px"
              color="#14171A"
            />

            <MultiFunctionButtonComponent
              text="Apply"
              width="256px"
              height="36px"
              background="#4C9EEB"
              gap="10px"
              padding="10px 16px"
              color="#FFFFFF"
            />
          </ButtonDiv>
        </CustomizableFilterandButtonDiv>
      </InnerContainer>
    </Container>
  );
};

export default DashBoardFilter;
