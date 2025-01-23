import styled from "styled-components"
import { useTeamMembers } from "../../contexts/TeamMemberContext";
import SearchComponent from "./SearchComponent";
import DropdownComponent from "./DropdownComponent";
import MultiFunctionButtonComponent from "./MultiFunctionButtonComponent";
import { FilterSVG, SearchSVG } from "../../svg/svg";
import { useNavigate } from "react-router-dom";


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


const SearchandFilterContent = () => {


    
    const {teamMembers} = useTeamMembers()
    const navigate = useNavigate()    
  return (
    <Container>
        <MemberCount>
            <MemberCountText>All Members: ({teamMembers.length})</MemberCountText>
        </MemberCount>
        <SearchFilterandHistoryDiv>
            <SearchComponent svg={SearchSVG} placeholder="Search a Team member..."/>
            <DropdownComponent
                svg={FilterSVG}
                text="Filter"
                width="auto"
                options={[
                { value: 'owner', label: 'Owner' },
                { value: 'super admin', label: 'Super Admin' },
                { value: 'admin', label: 'Admin' },
                { value: 'member', label: 'Member'},
                ]}
            />
            <MultiFunctionButtonComponent
             onClick={()=>navigate('/dashborad/filing_history')}
             text="Filling History" 
             height="36px" 
             width="137px" 
             padding="10px 18px" 
             background="#4C9EEB"
             fontSize="16px"
             lineHeight="16px"
             />
        </SearchFilterandHistoryDiv>
    </Container>
  )
}

export default SearchandFilterContent