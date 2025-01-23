import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { backButtonSVG } from "../../../svg/svg";


const Navigator = styled.div`
  height : 24px;
  width : 115px;
  display : flex;
  gap: 16px;
  position : relative;
  top : 12px;
  left : 24px;
  align-items : center;
`;

const BackButton = styled.div`
  height : 24px;
  width : 24px;
  cursor : pointer;
`;

const Pipe = styled.div`
  width: 7px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786;
`;


const TextDiv = styled.div`
  height : 20px;
  width : 52px;
  display : flex;
  align-items : center;
`;

const Text = styled.p `
  width: 37px;
  height: 14px;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171A;
`;

const TopNavigatingBar = () => {
  
const navigate = useNavigate();
  
const handleBackButton = ()=>{
  navigate('/sign-in')
}


  return (
    <Navigator>
        <BackButton onClick={handleBackButton}>{backButtonSVG}</BackButton>
        <Pipe>|</Pipe>
        <TextDiv>
          <Text>Team</Text>
        </TextDiv>
    </Navigator>
  )
}

export default TopNavigatingBar