import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedLeftPage from './pages/FixedLeftPage';
import RegisterComponent from './components/molecules/registerOTPmolecule/RegisterComponent';
import VerifyOTPComponent from './pages/VerifyOTPComponent';
import CreateAccount from './pages/CreateAccount';
import VerifyKYC from './pages/VerifyKYC';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #E0E0E0;
`;

const InnerContainer = styled.div`
  height: 640px;
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
  display : flex;
  justify-content : center;
  align-items : center;
  color : #14171A;
`;

function App() {
  return (
    <Router>
      <Container>
        <InnerContainer>
          <LeftContainer>
            <FixedLeftPage />
          </LeftContainer>
          <RightContainer>
            <InnerRightContainer>
              <Routes>
                <Route path="/" element={<RegisterComponent />} />
                 <Route path="/verify" element={<VerifyOTPComponent />} /> 
                 <Route path="/create-account" element={<CreateAccount />} /> 
                 <Route path="/verify-kyc" element={<VerifyKYC />} /> 

              </Routes>
            </InnerRightContainer>
          </RightContainer>
        </InnerContainer>
      </Container>
    </Router>
  );
}

export default App;
