import styled from 'styled-components';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import FixedLeftPage from '../pages/FixedLeftPage';
import RegisterComponent from '../pages/RegisterComponent';
import VerifyOTPComponent from '../pages/VerifyOTPComponent';
import CreateAccount from '../pages/CreateAccount';
import VerifyKYC from '../pages/VerifyKYC';
import Signin from '../pages/Signin';
import VerifyOTPAfterSignIn from '../pages/VerifyOTPAfterSignIn';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #E0E0E0;
  // box-sizing : border-box;
`;

const InnerContainer = styled.div`
  height: 640px ;
  width: 964px;
  padding-top: 8px;
  padding-left: 8px;
  background: #F5F8FA;
  display: flex;
  border-radius: 8px;
  gap: 2px;
`;

const LeftContainer = styled.div`
  display: flex;
  height: 624px;
  width: 484px;
  background: #4c9eeb;
  border-radius: 8px;
  flex: 1;
`;

const RightContainer = styled.div`
  flex: 1;
  background: transparent;
  height: 624px;
  width: 464px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerRightContainer = styled.div`
  height: 624px;
  width: 464px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #14171A;
`;

 const Layout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return isDashboard ? (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  ) : (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <FixedLeftPage />
        </LeftContainer>
        <RightContainer>
          <InnerRightContainer>
            <Routes>
              <Route path="/" element={<RegisterComponent />} />
              <Route path="/verify-otp" element={<VerifyOTPComponent />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/verify-kyc" element={<VerifyKYC />} />
              <Route path="/sign-in" element={<Signin />} />
              <Route path="/verify-sign-in" element={<VerifyOTPAfterSignIn />} />
            </Routes>
          </InnerRightContainer>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}

export default Layout;