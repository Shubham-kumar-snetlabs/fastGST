import styled from "styled-components";
import {
  crossSVG,
  EmailIconSVG,
  LunchIconSVG,
  OfflineSVG,
  PhoneIconSVG,
} from "../../svg/svg";
import MultiFunctionButtonComponent from "../../components/atoms/MultiFunctionButtonComponent";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const YouConatiner = styled.div`
  width: 335px;
  height: 38px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  box-sizing: border-box;
  background: #e4f4ff;

  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const WindowContentContainer = styled.div`
  width: 335px;
  height: 492px;
  padding: 0 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PhotoNameandButtonContainer = styled.div`
  width: 319px;
  height: 376px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PhotoandNameContainer = styled.div`
  width: 319px;
  height: 308px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PhotoContainer = styled.div`
  width: 319px;
  height: 224px;
  padding: 0 43px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
`;

const Photo = styled.img`
  width: 225.37px;
  height: 224px;
  border-radius: 1000px;
`;

const NameContainer = styled.div`
  width: 319px;
  height: 68px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Name = styled.div`
  width: 319px;
  height: 20px;
  font-family: Noto Sans;

  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const StatusDiv = styled.div`
  width: 319px;
  height: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #657786;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

const Status = styled.div`
  width: 51px;
  height: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BusyAt = styled.div`
  width: 51px;
  height: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const EmailandPhoneNumberContainer = styled.div`
  width: 319px;
  height: 308px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmailContainer = styled.div`
  width: 328px;
  height: 38px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const EmailAddress = styled.div`
  width: 328px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const PhoneNumberContainer = styled.div`
  width: 328px;
  height: 38px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const PhoneNumber = styled.div`
  width: 328px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

interface myStatus {
  name: string;
  email: string;
  photo: string;
  status: string;
  statusType: string;
  phoneNo: string;
  statusIcon: JSX.Element;
  statusTypeIcon: JSX.Element;
}

const MyStatus: myStatus[] = [
  {
    name: "Shivang Patel",
    email: "shivangpatel812@gmail.com",
    photo: "/ShivangSir.png",
    status: "offline",
    statusType: "Lunch",
    phoneNo: "1234567890",
    statusIcon: OfflineSVG,
    statusTypeIcon: LunchIconSVG,
  },
];

const ViewProfile = () => {
  const navigate = useNavigate();
  const { statusIcon, statusTypeIcon, ...profileData } = MyStatus[0];
  return (
    <Container>
      <YouConatiner>
        You
        {crossSVG}
      </YouConatiner>
      <WindowContentContainer>
        <PhotoNameandButtonContainer>
          <PhotoandNameContainer>
            <PhotoContainer>
              <Photo src="/ShivangSir.png" alt="Profile Photo" />
            </PhotoContainer>
            <NameContainer>
              <Name>{MyStatus[0].name}</Name>
              <StatusDiv>
                <Status>
                  {MyStatus[0].statusIcon} {MyStatus[0].status}
                </Status>
                <BusyAt>
                  {MyStatus[0].statusTypeIcon} {MyStatus[0].statusType}
                </BusyAt>
              </StatusDiv>
            </NameContainer>
          </PhotoandNameContainer>
          <MultiFunctionButtonComponent
            text="Edit Profile"
            width="319px"
            height="36px"
            gap="12px"
            borderRadius="1000px"
            border="1px solid #4C9EEB"
            padding="10px 12px"
            background="transparent"
            color="#4C9EEB"
            fontFamily="Noto Sans"
            fontSize="16px"
            fontWeight="500"
            onClick={() => navigate("edit-profile", { state: profileData })}
          />
        </PhotoNameandButtonContainer>
        <EmailandPhoneNumberContainer>
          <EmailContainer>
            Email
            <EmailAddress>
              {EmailIconSVG} {MyStatus[0].email}
            </EmailAddress>
          </EmailContainer>
          <PhoneNumberContainer>
            Phone Number
            <PhoneNumber>
              {PhoneIconSVG} +91-{MyStatus[0].phoneNo}
            </PhoneNumber>
          </PhoneNumberContainer>
        </EmailandPhoneNumberContainer>
      </WindowContentContainer>
    </Container>
  );
};

export default ViewProfile;
