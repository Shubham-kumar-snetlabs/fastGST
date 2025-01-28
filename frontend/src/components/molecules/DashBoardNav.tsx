import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  TeamSVG,
  BillingSVG,
  ClientSVG,
  InvitesSVG,
  NotificationsSVG,
  NotificatioNumberSVG,
  PreferencesSVG,
  ProfileSVG,
} from "../../svg/svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left : 12px;
  padding-right : 12px;
`;

const NavContainer = styled.div<{ isActive: boolean }>`
  width: 264px;
  height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background-color: ${(props) => (props.isActive ? "#F5F8FA" : "transparent")};
  color: ${(props) => (props.isActive ? "#1DA1F2" : "#14171A")};
  cursor: pointer;
  box-shadow: ${(props) => (props.isActive ? "0px 4px 4px 0px #B9DCF740" : "none")};

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
`;

const AdditionalIcon = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: inherit;
`;

interface NavItem {
  id: number;
  text: string;
  icon: JSX.Element;
  link: string; 
  additionalIcon?: JSX.Element;
}

interface DashBoardNavProps {
  activeItem: number; // ID of the active navigation item
  setActiveItem: (id: number) => void; // Function to update the active item
}

const navItems: NavItem[] = [
  { id: 1, text: "Team", icon: TeamSVG, link: "/team" },
  { id: 2, text: "Clients", icon: ClientSVG, link: "/clients" },
  { id: 3, text: "Billing", icon: BillingSVG, link: "/billing" },
  { id: 4, text: "Invites", icon: InvitesSVG, link: "/invites" },
  { id: 5, text: "Profile", icon: ProfileSVG, link: "/profile" },
  { id: 6, text: "Notifications", icon: NotificationsSVG, link: "/notifications", additionalIcon: NotificatioNumberSVG },
  { id: 7, text: "Preferences", icon: PreferencesSVG, link: "/preferences" },
];

const DashBoardNav: React.FC<DashBoardNavProps> = ({activeItem, setActiveItem}) => {
  

  const handleClick = (id: number) => {
    setActiveItem(id);
    console.log(activeItem," and ",id);
    
  };

  return (
    <Container>
      {navItems.map((item) => (
        <NavContainer
          key={item.id}
          isActive={item.id === activeItem}
          onClick={() => handleClick(item.id)}
        >
          <Link to={item.link}>
            {item.additionalIcon ? (
              <FlexWrapper>
                <MainContent>
                  <Icon>{item.icon}</Icon>
                  <Text>{item.text}</Text>
                </MainContent>
                <AdditionalIcon>{item.additionalIcon}</AdditionalIcon>
              </FlexWrapper>
            ) : (
              <MainContent>
                <Icon>{item.icon}</Icon>
                <Text>{item.text}</Text>
              </MainContent>
            )}
          </Link>
        </NavContainer>
      ))}
    </Container>
  );
};

export default DashBoardNav;
