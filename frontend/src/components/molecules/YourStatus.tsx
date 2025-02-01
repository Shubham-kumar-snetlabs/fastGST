import styled from "styled-components"
import { crossSVG } from "../../svg/svg";
import { useLocation } from "react-router-dom";


const Container = styled.div`
color: #657786;
`;

const TitleContainer = styled.div`
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
  color: #657786;
`;



const YourStatus = () => {
    const location = useLocation();
    const statusData = location.state || {};
  return (
    <Container>
        <TitleContainer>
            Your Status
            {crossSVG}
        </TitleContainer>
        <div>
      <h2>Status: {statusData.statusText || "No Status Set"}</h2>
      <p>Duration: {statusData.duration}</p>
      <div>{statusData.icon}</div>
    </div>
    </Container>
  )
}

export default YourStatus