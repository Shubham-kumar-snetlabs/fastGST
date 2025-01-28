import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import RegisterComponent from './pages/RegisterComponent';
import VerifyOTPAfterCreationComponent from './pages/VerifyOTPAfterCreationComponent';
import CompleteProfile from './pages/CompleteProfile';
import VerifyKYC from './pages/VerifyKYC';
import Signin from './pages/Signin';
import VerifyOTPAfterSignIn from './pages/VerifyOTPAfterSignIn';
import Dashboard from './pages/Dashboard';
import FilingHistory from './pages/FilingHistory';
import Clients from './pages/Clients';
import { useState } from 'react';

interface DashBoardLeftProps {
  activeItem: number; 
  setActiveItem: (id: number) => void; 
}


const App:React.FC<DashBoardLeftProps> = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/team' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/clients' element= {<Clients activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/billing' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/invites' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/profile' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/notifications' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/preferences' element= {<FilingHistory activeItem={activeItem} setActiveItem={setActiveItem}/>} />


        <Route path='/filing' element= {<FilingHistory activeItem={activeItem} setActiveItem={setActiveItem}/>} />


        <Route path="/sign-up" element={<RegisterComponent />} />
        <Route path="/verify-otp" element={<VerifyOTPAfterCreationComponent />} />
        <Route path="/create-account" element={<CompleteProfile />} />
        <Route path="/verify-kyc" element={<VerifyKYC />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/verify-sign-in" element={<VerifyOTPAfterSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;


