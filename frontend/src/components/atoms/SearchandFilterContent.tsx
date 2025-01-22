import styled from "styled-components"
import { useTeamMembers } from "../../contexts/TeamMemberContext";


const Container = styled.div`
    min-width : 888px;
    min-height : 36px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const MemberCount = styled.div`
    height : 16px;
    width : 125px;
`;

const MemberCountText = styled.div`
    height : 16px;
    width : max-content;
    min-width : 122px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
`;

const SearchFilterandHistoryDiv = styled.div`
    height : 36px;
    width : 495px;
    display : flex;
    gap : 16px;
`;


const SearchBarDiv = styled.div`
    width: 216px;
    height: 36px;
    padding: 9px 8px 9px 8px;
    box-sizing : border-box;
    border-radius: 100px ;
    border: 1px solid #AAB8C2;
    background: #F5F8FA;
    color : #657786;
    display : flex;
    gap : 10px;
`;

const SearchBarItem = styled.div`
    height : 18px;
    width : 174px;
    display : flex;
    // gap : 4px;
`;

const SearchIcon = styled.div`
    width: 18px;
    height: 18px;
    display : flex;
`;

const SearchInputDiv = styled.div`
    width: 152px;
    height: 14px;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;
    color : #657786;
    display : flex;
`;

const SearchInput = styled.input`
    background : transparent;
    outline : none;
    border : none;
    font-style: italic;
    color : #657786;
`;

const FilterDiv = styled.div`
    width: 110px;
    height: 36px;
    padding: 9px 12px 9px 12px;
    box-sizing : border-box;
    gap: 6px;
    border-radius: 100px;
    border: 1px solid #657786;
    display : flex;
`;

const FilterText = styled.div`
    width: 40px;
    height: 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color : #657786;
   
`;

const Dropdown = styled.select`
    width: 16px;
    height: 16px;
    font-family: Noto Sans;
    font-size: 14px;
    font-weight: 400;
    color: #657786;
    background: #F5F8FA;
    border : none;
    outline : none;

    option {
        font-size: 14px;
        color: #657786;
        background: transparent;
        width : 100%;
        padding : 2px;
        box-sizing : border-box;
        border-radius: 100px;
    }
`;

const FillingDiv = styled.div`
    width: 137px;
    height: 36px;
    padding: 10px 18px 10px 18px;
    box-sizing : border-box;
    display : flex;
    gap: 10px;
    border-radius: 1000px;
    background : #4C9EEB;
`;

const FillingItem = styled.div`
    width: 101px;
    height: 16px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #FFFFFF;
`;

const SearchandFilterContent = () => {

    const SearchSVG = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.282 8.67533C9.95923 7.85553 10.387 6.80404 10.387 5.64562C10.387 3.04364 8.26616 0.922852 5.66418 0.922852C3.0622 0.922852 0.941406 3.04364 0.941406 5.64562C0.941406 8.2476 3.0622 10.3684 5.66418 10.3684C6.80477 10.3684 7.87408 9.9585 8.69388 9.26345L12.3652 12.9347C12.4543 13.0238 12.5612 13.0595 12.6681 13.0595C12.7751 13.0595 12.882 13.0238 12.9711 12.9347C13.1315 12.7743 13.1315 12.4892 12.9711 12.3288L9.282 8.67533ZM5.64636 9.51295C3.50774 9.51295 1.77903 7.78424 1.77903 5.64562C1.77903 3.50701 3.50774 1.7783 5.64636 1.7783C7.78497 1.7783 9.51368 3.50701 9.51368 5.64562C9.51368 7.78424 7.78497 9.51295 5.64636 9.51295Z" fill="#657786"/>
    </svg>

    const FilterSVG = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 16.2938C7.43254 16.295 7.36616 16.2767 7.30875 16.2413C7.25277 16.2081 7.20639 16.1609 7.17418 16.1044C7.14196 16.0478 7.12501 15.9839 7.125 15.9188V10.6275L2.32875 4.35379C2.27795 4.28833 2.25026 4.2079 2.25 4.12504V1.94629C2.25 1.84683 2.28951 1.75145 2.35984 1.68112C2.43016 1.6108 2.52554 1.57129 2.625 1.57129H15.375C15.4745 1.57129 15.5698 1.6108 15.6402 1.68112C15.7105 1.75145 15.75 1.84683 15.75 1.94629V4.12504C15.7497 4.2079 15.7221 4.28833 15.6713 4.35379L10.875 10.6275V14.2838C10.8752 14.3512 10.8572 14.4175 10.8228 14.4756C10.7885 14.5337 10.7392 14.5814 10.68 14.6138L7.68 16.2488C7.62472 16.2786 7.56282 16.2941 7.5 16.2938ZM3 3.99754L7.79625 10.2713C7.84705 10.3367 7.87474 10.4172 7.875 10.5V15.2888L10.125 14.0625V10.5C10.1253 10.4172 10.1529 10.3367 10.2037 10.2713L15 3.99754V2.32129H3V3.99754Z" fill="#657786"/>
    <path opacity="0.35" d="M14.25 1.875V3.42375C14.2497 3.58774 14.1957 3.74713 14.0963 3.8775L9.52875 9.85125C9.42927 9.98162 9.37526 10.141 9.375 10.305V13.3912C9.37619 13.524 9.3421 13.6548 9.27621 13.7701C9.21033 13.8854 9.11501 13.9811 9 14.0475L7.5 14.8575V15.8475L10.5 14.2125V10.4288L15.375 4.05375V1.875H14.25Z" fill="#657786"/>
    </svg>
    
    const {teamMembers} = useTeamMembers()
    
    
  return (
    <Container>
        <MemberCount>
            <MemberCountText>All Members: ({teamMembers.length})</MemberCountText>
        </MemberCount>
        <SearchFilterandHistoryDiv>
            <SearchBarDiv>
                <SearchBarItem>
                    <SearchIcon>{SearchSVG}</SearchIcon>
                    <SearchInputDiv>
                        <SearchInput
                        placeholder="Search a Team member..." />
                    </SearchInputDiv>
                </SearchBarItem>
            </SearchBarDiv>
            <FilterDiv>
                {FilterSVG}
                <FilterText>Filter</FilterText>
                <Dropdown>
                    <option value="all">All</option>
                    <option value="some">Some</option>
                </Dropdown>
            </FilterDiv>
            <FillingDiv>
                <FillingItem>Filing History</FillingItem>
            </FillingDiv>
        </SearchFilterandHistoryDiv>
    </Container>
  )
}

export default SearchandFilterContent