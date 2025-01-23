import styled from 'styled-components';
import StepContainerComponent from '../organism/StepContainerComponent';
import { bodyIconSVG } from '../../svg/svg';


const InnerBodyContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 545px;
  min-width : 316px;
  display : flex;
  flex-direction : column;
  gap: 12px;
  align-items : center;
`;

const InnerBodyIconContainer = styled.div`
  height : 48px;
  width : 48px;
`;

const BodyContentContainer = styled.div`
  height : 100%;
  width : 100%;
  min-height : 485px;
  min-width : 316px;
  display : flex;
  flex-direction : column;
  align-items: center;
  gap : 24px;
`;

const BodyTitle = styled.div`
  height : 44px;
  // width : 100%;
  width : 316px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.78px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #14171A
`;

const BodyDesciption = styled.div`
  width : 100%;
  min-width: 316px;
  height: 17px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  letter-spacing: -0.15000000596046448px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color : #657786
`;

const BodyContent = styled.div`
  width: 316px;
  height: 376px;
  padding: 16px 0px 16px 0px;
  display : flex;
  justify-content : center;
  gap: 10px;
  border-radius: 8px ;
  opacity: 0px;
  box-sizing : border-box;
  border : 1px solid #AAB8C2;
  color : #FFFFFF;

  box-shadow: 2px 2px 8px 2px #4C9EEB40;
`;

const DashBoardBody = () => {
  return (
    <InnerBodyContainer>
      <InnerBodyIconContainer>{bodyIconSVG}</InnerBodyIconContainer>
      <BodyContentContainer>
        <BodyTitle>You have not added any member in your Team.</BodyTitle>
        <BodyDesciption>When you do, It’ll show up here.</BodyDesciption>
        <BodyContent>
          <StepContainerComponent/>
        </BodyContent>
      </BodyContentContainer>
    </InnerBodyContainer>
  )
}

export default DashBoardBody