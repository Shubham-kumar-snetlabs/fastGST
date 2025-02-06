import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import VerifyOTPAfterCreationComponent from './pages/registerAndLogin/VerifyOTPAfterCreationComponent';

import VerifyKYC from './pages/registerAndLogin/VerifyKYC';

import VerifyOTPAfterSignIn from './pages/registerAndLogin/VerifyOTPAfterSignIn';

import { useState } from 'react';
import Business from './pages/clients/Business';

import Profile from './pages/profile/Profile';
import Dashboard from './pages/team/Dashboard';
import FilingHistory from './pages/team/FilingHistory';
import Clients from './pages/clients/Clients';
import BusinessFiling from './pages/clients/BusinessFiling';
import GSTFiled from './pages/clients/GSTFiled';
import RegisterComponent from './pages/registerAndLogin/RegisterComponent';
import CompleteProfile from './pages/registerAndLogin/CompleteProfile';
import Signin from './pages/registerAndLogin/Signin';


interface DashBoardLeftProps {
  activeItem: number; 
  setActiveItem: (id: number) => void; 
}


const App:React.FC<DashBoardLeftProps> = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Dashboard activeItem={0} setActiveItem={setActiveItem} />} />
        <Route path='filing' element= {<FilingHistory activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/team' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/team/filing' element= {<FilingHistory activeItem={activeItem} setActiveItem={setActiveItem}/>} />

        <Route path='/clients' element= {<Clients activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/clients/business' element={<Business activeItem={activeItem} setActiveItem={setActiveItem}/>}/>
        <Route path='/clients/business/business-filing' element= {<BusinessFiling activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path='/clients/business/business-filing/gst-filed' element= {<GSTFiled activeItem={activeItem} setActiveItem={setActiveItem}/>} />

        <Route path='/billing' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/invites' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />

        <Route path="/profile" element={<Profile  activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        <Route path="/profile/*" element={<Profile  activeItem={activeItem} setActiveItem={setActiveItem}/>} />
        
        <Route path='/notifications' element= {<Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />} />
        <Route path='/preferences' element= {<FilingHistory activeItem={activeItem} setActiveItem={setActiveItem}/>} />

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


