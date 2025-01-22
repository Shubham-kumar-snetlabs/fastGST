import { useNavigate } from "react-router-dom";
import styled from "styled-components";


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
  const backButtonSVG = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.9996 11.2531H4.80711L8.78211 7.28557C8.92334 7.14434 9.00268 6.95279 9.00268 6.75307C9.00268 6.55334 8.92334 6.3618 8.78211 6.22057C8.64088 6.07934 8.44934 6 8.24961 6C8.04988 6 7.85834 6.07934 7.71711 6.22057L2.46711 11.4706C2.40657 11.5365 2.35831 11.6127 2.32461 11.6956C2.32041 11.7204 2.32041 11.7457 2.32461 11.7706C2.30416 11.8312 2.29156 11.8942 2.28711 11.9581V12.0031C2.28746 12.0827 2.30272 12.1616 2.33211 12.2356C2.36324 12.3198 2.4118 12.3964 2.47461 12.4606L7.72461 17.7106C7.79433 17.7809 7.87728 17.8367 7.96868 17.8747C8.06007 17.9128 8.1581 17.9324 8.25711 17.9324C8.35612 17.9324 8.45415 17.9128 8.54554 17.8747C8.63694 17.8367 8.71989 17.7809 8.78961 17.7106C8.85991 17.6408 8.9157 17.5579 8.95378 17.4665C8.99185 17.3751 9.01146 17.2771 9.01146 17.1781C9.01146 17.0791 8.99185 16.981 8.95378 16.8896C8.9157 16.7982 8.85991 16.7153 8.78961 16.6456L4.80711 12.7531H20.9996C21.1985 12.7531 21.3893 12.6741 21.5299 12.5334C21.6706 12.3927 21.7496 12.202 21.7496 12.0031C21.7496 11.8042 21.6706 11.6134 21.5299 11.4727C21.3893 11.3321 21.1985 11.2531 20.9996 11.2531Z" fill="#14171A"/>
  </svg>

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