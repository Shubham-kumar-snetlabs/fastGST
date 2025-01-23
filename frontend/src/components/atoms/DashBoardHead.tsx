import styled from 'styled-components';

const InnerHeadContainer = styled.div`
  height: 52px;
  width: 100%;
  min-width: 653px;
  display: flex;
  gap: 10px;
`;

const HeadIconContainer = styled.div`
  height: 40px;
  width: 40px;
`;

const HeadTextContainer = styled.div`
  height: 52px;
  width: 100%;
  min-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HeadTitle = styled.div`
  height: 24px;
  width: 100%;
  min-width: 64px;
  font-family: Noto Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #14171a;
`;

const HeadDescription = styled.div`
  width: 100%;
  min-width: 520px;
  height: 16px;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;


interface DashBoardHeadProps {
  svg: React.ReactNode; 
  headTitle: string; 
  headDescription: string; 
}

const DashBoardHead:React.FC<DashBoardHeadProps> = ({ svg, headTitle, headDescription }) => {
  return (
    <InnerHeadContainer>
      <HeadIconContainer>{svg}</HeadIconContainer>
      <HeadTextContainer>
        <HeadTitle>{headTitle}</HeadTitle>
        <HeadDescription>{headDescription}</HeadDescription>
      </HeadTextContainer>
    </InnerHeadContainer>
  );
};

export default DashBoardHead;
