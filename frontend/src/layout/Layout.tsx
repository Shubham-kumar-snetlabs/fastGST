import styled from "styled-components";
import DashBoardLeft from "../components/molecules/DashBoardLeft";

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fffff9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 832px;
  min-width: 1280px;
  display: flex;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: auto;
  min-height: 832px;
  max-width: 288px;
  background: #e1e8ed;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 832px;
  min-width: 992px;
  background: #e1e8ed;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  padding: 8px 8px 8px 0;
`;

interface LayoutProps {
    children: React.ReactNode;
    activeItem: number;
    setActiveItem: (id: number) => void;

    filterOpen?: boolean;
    setFilterOpen?: (open: boolean) => void;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children, activeItem, setActiveItem, filterOpen,setFilterOpen }) => {
    return (
      <LayoutContainer>
        <MainContainer>
          <LeftContainer>
            <DashBoardLeft activeItem={activeItem} setActiveItem={setActiveItem} filterOpen={filterOpen} setFilterOpen={setFilterOpen}/>
          </LeftContainer>
          <RightContainer>{children}</RightContainer>
        </MainContainer>
      </LayoutContainer>
    );
  };
  
  export default Layout;
  
