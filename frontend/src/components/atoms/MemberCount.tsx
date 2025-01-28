import React from "react";
import styled from "styled-components";

const MemberCountContainer = styled.div`
  height: 16px;
  width: max-content;
`;

const MemberCountText = styled.div`
  height: 16px;
  width: max-content;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

interface MemberCountProps {
  label: string;
  count: number;
}

const MemberCount: React.FC<MemberCountProps> = ({ label, count }) => {
  return (
    <MemberCountContainer>
      <MemberCountText>
        {label}: ({count})
      </MemberCountText>
    </MemberCountContainer>
  );
};

export default MemberCount;
