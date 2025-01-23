import  { useState } from 'react';
import styled from 'styled-components';
import { TeamSVG, BillingSVG, ClientSVG, InvitesSVG, NotificationsSVG, NotificatioNumberSVG, PreferencesSVG, ProfileSVG} from '../../svg/svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  background-color: ${(props) => (props.isActive ? '#F5F8FA' : 'transparent')};
  color: ${(props) => (props.isActive ? '#1DA1F2' : '#14171A')};
  cursor: pointer;
  box-shadow: ${(props) => (props.isActive ? '0px 4px 4px 0px #B9DCF740' : 'none')};

`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items : center;
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
  // font-family: Inter;
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
  additionalIcon?: JSX.Element; 
}

// NavItems array
const navItems: NavItem[] = [
  { id: 1, text: 'Team', icon: TeamSVG },
  { id: 2, text: 'Clients', icon: ClientSVG },
  { id: 3, text: 'Billing', icon: BillingSVG },
  { id: 4, text: 'Invites', icon: InvitesSVG },
  { id: 5, text: 'Profile', icon: ProfileSVG },
  { id: 6, text: 'Notifications', icon: NotificationsSVG, additionalIcon : NotificatioNumberSVG },
  { id: 7, text: 'Preferences', icon: PreferencesSVG },
];

const DashBoardNav = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(1); 

  const handleClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <Container>
      {navItems.map((item) => (
        <NavContainer
          key={item.id}
          isActive={item.id === activeItemId}
          onClick={() => handleClick(item.id)}
        >
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
        </NavContainer>
      ))}
    </Container>
  );
};

export default DashBoardNav;















