import React, { useState } from 'react'
import Layout from '../../layout/Layout';
import styled from 'styled-components';
import TopNavigatingBar from '../../components/molecules/TopNavigatingBar';
import DashBoardTitle from '../../components/atoms/deprecated/DashBoardHead';
import { AwayIConSVG, crossSVG, DeleteIconSVG, EmailIconSVG, LogoutIconSVG, LunchIconSVG, OfflineSVG, PauseNotificationIConSVG, PhoneIconSVG, ProfileBigIconSVG, ProfileInNavSVG, StatusIconSVG } from '../../svg/svg';
import MultiFunctionButtonComponent from '../../components/atoms/MultiFunctionButtonComponent';

import { Route, Routes, useNavigate } from 'react-router-dom';
import SetStatus from './SetStatus';
import SetAway from './SetAway';
import ViewProfile from './ViewProfile';
import YourStatus from '../../components/molecules/YourStatus';
import EditProfile from './EditProfile';


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
  align-items: center;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 672px;
  min-width: 888px;
  display: flex;
  gap: 24px;
`;

const ProfileNavigatorContainer = styled.div`
    width : auto;
    min-width : 481px;
    height : fit-content;
    padding : 16px 8px;
    display : flex;
    border-radius : 12px;
    gap : 10px;
    background : #E4F4FF;
`;

const ProfileNavigator = styled.div`
    width : 465px;
    height : auto;
    min-height : 425px;
`;

const ProfileNavigatorItems = styled.div<{activeNav : boolean;}>`
    width : 465px;
    height : 70px;
    border-radius : 12px;
    padding : 16px;
    box-sizing : border-box;
    background : ${(props) => (props.activeNav ? "#B9DCF7" : "transparent")};
    cursor : pointer;
    border-bottom : 1px solid #E1E8ED;
`;

const WindowContainer = styled.div`
    width : 383px;
    height : fit-content;
    border-radius : 12px;
    border : 1px solid #AAB8C2;
    background : #FFFFFF;
    display : flex;
    gap : 8px;
    flex-direction : column;
    padding : 24px;
    box-sizing : border-box;
    box-shadow: 0px 4px 10px 0px #0000001A;

`;


interface DashBoardLeftProps {
    activeItem: number;
    setActiveItem: (id: number) => void;
}


interface ProfileItems {
    id: number;
    title: string;
    text?: string;
    icon: JSX.Element;
    link: string; 
    additionalIcon?: JSX.Element;
}

const profileItems: ProfileItems[] = [
{ 
    id: 1, 
    title: "View Profile", 
    text : "You can view & Edit your Profile Information.",
    icon: ProfileInNavSVG, 
    link: "view-profile" 
},
{ 
    id: 2, 
    title: "Set a Status", 
    text : "Set status to all your teams and team members.",
    icon: StatusIconSVG, 
    link: "set-status" 
},
{ 
    id: 3, 
    title: "Set yourself as away", 
    text : "Set your availability for all your teams till you update.",
    icon: AwayIConSVG, 
    link: "set-away" 
},
{ 
    id: 4, 
    title: "Pause Notifications", 
    text : "You can pause notification till you disable it.",
    icon: PauseNotificationIConSVG, 
    link: "pause-notifications" 
},
{ 
    id: 5, 
    title: "Log out", 
    text : "You can log out your account.",
    icon: LogoutIconSVG, 
    link: "log-out" 
},
{ 
    id: 6, 
    title: "Delete Account", 
    text : "Deleting your account will erase all your clients and team.",
    icon: DeleteIconSVG, 
    link: "delete-account",
},
] 
;

const Profile : React.FC<DashBoardLeftProps> = ({activeItem, setActiveItem}) => {

    const [activeNav ,  setActiveNav] = useState(1);
    const navigate = useNavigate();

return(
    <Layout activeItem={activeItem} setActiveItem={setActiveItem}>
        <InnerRightContainer>
            <NavigatingTopBar>
                <TopNavigatingBar
                mainText = 'Profile'
                showBackButton = {false}
                showExtendedRoutes = {false} />
            </NavigatingTopBar>
            <ContentContainer>
                <ContentMainContainer>
                    <TitleContainer>
                        <DashBoardTitle
                        svg = {ProfileBigIconSVG}
                        headTitle='Profile' 
                        />
                    </TitleContainer>
                    <BodyContainer>
                        <ProfileNavigatorContainer>
                            <ProfileNavigator>
                                {profileItems.map((item)=>(
                                <ProfileNavigatorItems 
                                activeNav={activeNav === item.id} 
                                onClick={
                                    ()=> {
                                        setActiveNav(item.id); 
                                        navigate(`/profile/${item.link}`);
                                        } }  
                                >
                                    <DashBoardTitle
                                    key={item.id}
                                    headTitle={item.title}
                                    headDescription={item.text}
                                    svg = {item.icon}
                                    height='70px'
                                    width='465px'
                                    gap='8px'
                                    textGap='8px'
                                    textHeight='38px'
                                    textWidth='401px'
                                    titleHeight='16px'
                                    titleWidth='361px'
                                    titleColor={ item.title==="Delete Account" ? '#EB5244':'#14171A'}
                                    titleFontSize='16px'
                                    titleFontWeight='500'
                                    descriptionHeight='14px'
                                    descriptionWidth='401px'
                                    descriptionColor='#657786'
                                    descriptionFontSize='14px'
                                    />
                                </ProfileNavigatorItems>
                                ))}
                            </ProfileNavigator>
                        </ProfileNavigatorContainer>
                        <WindowContainer>
                        <Routes>
                        <Route path="/" element={<ViewProfile />} />
              <Route path="view-profile" element={<ViewProfile />} />
              <Route path="edit-profile" element={<EditProfile />}/>
              <Route path="view-profile/edit-profile" element={<EditProfile />} />
              <Route path="set-status" element={<SetStatus />} />
              <Route path="set-status/your-status" element={<YourStatus />} />
              <Route path="set-away" element={<SetAway />} />
              <Route path="pause-notifications" element={<p>Pause Notifications</p>} />
              <Route path="log-out" element={<p>Logging Out...</p>} />
              <Route path="delete-account" element={<p>Deleting Account...</p>} />
            </Routes>
                        </WindowContainer>
                    </BodyContainer>
                </ContentMainContainer>
            </ContentContainer>
        </InnerRightContainer>
    </Layout>
)
}

export default Profile;