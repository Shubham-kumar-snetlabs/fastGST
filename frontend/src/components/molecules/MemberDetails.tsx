import React, { useState } from "react";
import styled from "styled-components"
import RemoveModal from "./RemoveModal";

const Container = styled.div`
    height : 100%;
    width : 100%;
    min-width: 1280px;
    min-height: 832px;
    position : absolute;
    top: 0;
    left: 0;
    display : flex;
    justify-content : center;
    align-items : center;
    background : #000000CC;
`;

const MainContainer = styled.div`
    width: 480px;
    height: 496px;
    border-radius: 12px;
    background : #E1E8ED;
    box-shadow: 0px 4px 4px 0px #00000040;
`;

const PhotoContainer = styled.div`
    height : 96px;
    width : 96px;
    position : relative;
    top : 28px;
    border-radius : 1000px;
    border: 3px solid #FFFFFF;
`;

const Photo = styled.img`
    height : 96px;
    width : 96px;
    border-radius : 1000px;
`;

const ContentContainer = styled.div`
    width: 480px;
    height: 376px;
    margin-top: 120px ;
    padding: 54px 36px 24px 36px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    gap: 32px;
    background : #F5F8FA;
    border-radius : 12px;
    justify-content : flex-end;
`;

const UserDetailDiv = styled.div`
    width : 408px;
    height : 80px;
    display : flex;
    justify-content : space-between;
`;

const UserDescription = styled.div`
    width : 218px;
    height : 80px;
    display : flex;
    flex-direction : column;
    gap : 12px;
`;

const Name = styled.div`
    width: 159px;
    height: 24px;
    // font-family: Noto Sans;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    color : #14171A;
`;

const Number = styled.div`
    width: 125px;
    height: 16px;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #657786;
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
    color : #657786;
`;

const RemoveMember = styled.div`
    width: 161px;
    height: 36px;
    padding: 10px 16px 10px 16px;
    box-sizing : border-box;
    display : flex;
    gap: 10px;
    border-radius: 1000px ;
    border: 1px solid #EB5244;

    // font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #EB5244;
    cursor : pointer;
`;

const RoleContainer = styled.div`
    width: 408px;
    height: 54px;
    border-radius: 4px ;
    border: 1px solid #657786;
`;

const RoleInnerContainer = styled.div`
    margin : 8px;
    box-sizing : border-box;
    width : 392px;
    height : 38px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

const RoleandRoleType = styled.div`
    width : 109px;
    height : 38px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`;

const Role = styled.div`
    width : 29px;
    height : 14px;

    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #4C9EEB;
`;

const RoleType = styled.div`
    
    width : auto;
    min-width : 63px;
    height : 16px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color : #14171A;

`;

const Dropdown = styled.div`
    height: 24px;
    width: 24px;
    cursor : pointer;
`;

const Options = styled.div`
    width: 100%;
    background:  #e1e8ed;
    border: 1px solid #657786;
    border-radius: 4px;
    position : relative;
`;

const Option = styled.div`
    padding: 5px;
    font-size: 16px;
    color: #14171a;
    cursor: pointer;
    &:hover {
        background: #4C9EEB
    }
`;

const ButtonContainer = styled.div`
    width : fit-content;
    max-width : 408px;
    height : 100px;
    display : flex;
    flex-direction : column ;
    gap : 16px;
`;


const CancelButton = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 42px;
    border-radius : 1000px;
    padding : 12px 18px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 10px;
    background : #AAB8C2;

    // font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #14171A;

    &:hover{
    background :rgb(105, 126, 141);
    }

    cursor : pointer;
`;

const UpdateButton = styled.div`
    width : fit-content;
    min-width : 408px;
    height : 42px;
    border-radius : 1000px;
    padding : 12px 18px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 10px;
    background : #B9DCF7;

    &:hover{
    background : #4C9EEB;
    }

    // font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color : #FFFFFF;

    cursor : pointer;
`;

interface MemberDetailsProps {
    showMemberDetails: boolean;
    setShowMemberDetails: React.Dispatch<React.SetStateAction<boolean>>;
  }



const MemberDetails:React.FC<MemberDetailsProps> = ({ setShowMemberDetails }) => {
    const memberTypes = ["Owner", "Super Admin", "Admin", "Member"]

    const [removeModal , setRemoveModal] = useState(false)
    const [roleType, setRoleType] = useState("Member");
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleCloseMemberDetails = ()=>{
        setShowMemberDetails(false );
    }

    const handleRemoveModal = ()=>{
        setRemoveModal(true)
        // setShowMemberDetails(false)
    }

    const handleRoleChange = (newRole: string) => {
        setRoleType(newRole);
        setDropdownOpen(false);
    };

    const DropdownSVG = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9662 9.51758L12.0007 14.4831L7.03516 9.51758" stroke="#657786" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

  return (
    <Container onClick={handleCloseMemberDetails}>
        <MainContainer onClick={(e)=>e.stopPropagation()} >
            <ContentContainer>
            <PhotoContainer>
                <Photo src="/ShivangSir.png"/>
            </PhotoContainer>
                <UserDetailDiv>  
                    <UserDescription>
                        <Name>Shivang Patel</Name>
                        <Number>+91-1234567890</Number>
                        <Email>Shivangpatel283@gmail.com</Email>
                    </UserDescription>
                    <RemoveMember onClick={handleRemoveModal}>Remove Member</RemoveMember>
                </UserDetailDiv>
                <RoleContainer>
                        <RoleInnerContainer onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            <RoleandRoleType>
                                <Role>Role</Role>
                                <RoleType>{roleType}</RoleType>
                            </RoleandRoleType>
                            <Dropdown>{DropdownSVG}</Dropdown>
                        </RoleInnerContainer>
                        {isDropdownOpen && (
                            <Options>
                                {memberTypes.map((role) => (
                                    <Option key={role} onClick={() => handleRoleChange(role)}>
                                        {role}
                                    </Option>
                                ))}
                            </Options>
                        )}
                    </RoleContainer>
                <ButtonContainer>
                    <CancelButton onClick={()=>setShowMemberDetails(false)}>Cancel</CancelButton>
                    <UpdateButton>Update</UpdateButton>
                </ButtonContainer>
            </ContentContainer>
        </MainContainer>
        {removeModal && <RemoveModal
        setRemoveModal={setRemoveModal}
        setShowMemberDetails={setRemoveModal}
        />}
    </Container>
  )
}

export default MemberDetails