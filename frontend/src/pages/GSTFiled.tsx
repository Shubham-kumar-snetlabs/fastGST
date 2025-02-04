import styled from "styled-components";
import TopNavigatingBar from "../components/molecules/TopNavigatingBar";
import { BusinessIconSVG, CopyIconSVG, CyberIconSVG, DefensiveIconSVG, TimerIconSVG } from "../svg/svg";
import { useLocation, useNavigate } from "react-router-dom";
import DashBoardTitle from "../components/atoms/deprecated/DashBoardHead";
import Layout from "../layout/Layout";
import PersonInfoComponent from "../components/atoms/PersonInfoComponent";
import { useEffect, useState } from "react";
import MultiFunctionButtonComponent from "../components/atoms/MultiFunctionButtonComponent";
import DropdownComponent from "../components/atoms/DropdownComponent";
import OTPBox from "../components/atoms/OTPBox";
import EnterOTPBox from "../components/molecules/EnterOTPBox";
import FiledSuccessfullyModal from "../components/molecules/FiledSuccessfullyModal";




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
  min-height: 768px;
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
  min-height: 736px;
  min-width: 888px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const TitleContainer = styled.div`
  width: 100%;
  min-width: 888px;
  height: 52px;
  display: flex;
  justify-content : space-between;
  align-items : flex-start;
`;

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 660px;
  min-width: 888px;
  display: flex;
  flex-direction : column;
  gap: 40px;
  padding-top : 24px;
  box-sizing : border-box;
  align-items : center;
`;

const EndToEndEncryptedDiv = styled.div`
  width : 163px;
  height : 16px;
  display : flex;
  gap : 8px;
  align-items : center;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 300;
  line-height: 12px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
  white-space : nowrap;
`;

const BodyMainContainer = styled.div`
  width : 276px;
  height : 301px;
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : 16px;
`;

const InnerMainContainer = styled.div`
  width : 276px;
  height : 237px;
  display : flex;
  flex-direction : column;
  gap : 24px;
   align-items : center;
`;

const TitleDiv = styled.div`
  width: 277px;
  height: 27px;

  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 27.24px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A;

`;

const DropdownDiv = styled.div`
  width : 276px;
  height : 54px;

`;

const DescriptionDiv = styled.div`
  width : 276px;
  height : 42px;
`;

const Description1 = styled.div`
  width : 300px;
  height : 19px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;

const Description2 = styled.div`
  width : 276px;
  height : 19px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;

const OTPTimerandButtonDiv = styled.div`
  width : 300px;
  height : 140px;
  display : flex;
  flex-direction : column;
  gap : 16px;
`;

const TimerandCopyDiv = styled.div`
  width : 300px;
  height : 18px;
  padding-right : 16px;
  padding-left : 16px;
  box-sizing : border-box;
  display : flex;
  justify-content : space-between;
`;

const Timer = styled.div`
  color : #4D4D4D;
  display : flex;
  align-items : center;
  gap : 4px;

  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Copy = styled.div`
  height : 18px;
  width : 51px;
  display : flex;
  align-items : center;
  gap : 4px;
  color : #4C9EEB;
  cursor : pointer;

  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

`;

const OTPandButtonDiv = styled.div`
  width : 330px;
  height : 106px;
  display : flex;
  flex-direction : column;
  gap : 24px;
`;

const OTPBoxDiv = styled.div`
  width : 300px;
  height : 40px;
  display : flex;
  gap : 16px;
`;

const ButtonDiv = styled.div`
  width : 300px;
  height : 42px;
  display : flex;
  gap : 12px;
`;


interface DashBoardLeftProps {
  activeItem: number;
  setActiveItem: (id: number) => void;
}





const GSTFiled: React.FC<DashBoardLeftProps> = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { businessState, client } = location.state || {};
  

  
  
  const [showClientDetails, setShowClientDetails] = useState(false);
  const [successModal , setSuccessModal] = useState(false)


  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes
  const [otpValue, setOtpValue] = useState(""); 

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when time reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft]);

  // Convert seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleCopyOTP = () => {
    if (otpValue)
      navigator.clipboard.writeText(otpValue)
  };
  

  return (
    <Layout activeItem={activeItem} setActiveItem={setActiveItem} >
      <InnerRightContainer>
        <NavigatingTopBar>
          <TopNavigatingBar
            showBackButton={true}
            mainText="Client"
            showExtendedRoutes={true}
            extendedRouteText="Filing"
            backButtonAction={()=>navigate('/business')}
          />
        </NavigatingTopBar>
        <ContentContainer>
          <ContentMainContainer>
            <TitleContainer>
              <DashBoardTitle
                svg={BusinessIconSVG}
                headTitle={businessState?.name}
                headDescription={businessState?.gstNo}
                
              />
              <PersonInfoComponent
              name={client?.name}
              photo={client?.photo}
              background="#E4F4FF"
              width="105.15px"
              height="32px"
              onClick={()=>setShowClientDetails(true)}
              />
            </TitleContainer>
            <BodyContainer>
              <EndToEndEncryptedDiv>{DefensiveIconSVG} End-to-End Encrypted </EndToEndEncryptedDiv>
              <BodyMainContainer>
                {CyberIconSVG}
                <InnerMainContainer>
                  <TitleDiv>OTP Received!</TitleDiv>
                  <DropdownDiv>
                    <DropdownComponent
                    height="54px"
                    width="276px"
                    borderRadius="4px"
                    text="GST Type"
                    borderColor="#AAB8C2"
                    background="#F5F8FA"
                    justifyContent="space-between"
                    options={[
                            { value: "r1", label: "R1" },
                            { value: "r2", label: "R2" },
                            { value: "r3", label: "R3" },
                        ]}
                     />
                  </DropdownDiv>
                  <DescriptionDiv>
                    <Description1>You both saved your valuable time and efforts.</Description1>
                    <Description2>Use this OTP to complete the GST filing.</Description2>
                  </DescriptionDiv>
                  <OTPTimerandButtonDiv>
                    <TimerandCopyDiv>
                        <Timer>{TimerIconSVG} {formatTime(timeLeft)}</Timer>
                        <Copy onClick={handleCopyOTP}>{CopyIconSVG} Copy</Copy> 
                    </TimerandCopyDiv>
                    <OTPandButtonDiv>
                      <OTPBoxDiv>
                        <EnterOTPBox
                        width="300px"
                        height="40px"
                        boxHeight="40px"
                        boxWidth="40px"
                        allowAlphanumeric = {true}
                        gap="16px"
                        numInputs={6}
                        padding="8px"
                        value={otpValue} 
                        onChange={setOtpValue} 
                        />
                      </OTPBoxDiv>
                      <ButtonDiv>
                        <MultiFunctionButtonComponent
                        text="Resend"
                        color="#4C9EEB"
                        border="1px solid #4C9EEB"
                        borderRadius="100px"
                        gap="4px"
                        padding="12px 16px"
                        background="transparent" 
                        width="144px"
                        height="42px"
                        onClick={()=>setTimeLeft(600)}
                        />
                        <MultiFunctionButtonComponent 
                        text="Done"
                        color="#FFFFFF"
                        background="#4C9EEB"
                        borderRadius="1000px"
                        padding="12px 16px"
                        gap="10px"
                        width="144px"
                        height="42px"
                        onClick={()=>setSuccessModal(true)}
                        />
                      </ButtonDiv>
                    </OTPandButtonDiv>
                  </OTPTimerandButtonDiv>
                </InnerMainContainer>
              </BodyMainContainer>
            </BodyContainer>
          </ContentMainContainer>
        </ContentContainer>
      </InnerRightContainer>
      {successModal && <FiledSuccessfullyModal member = {client} setSuccessModal={setSuccessModal} successModal={successModal}/>}
    </Layout>
  );
};

export default GSTFiled;
