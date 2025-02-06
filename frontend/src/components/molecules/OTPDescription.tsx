import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 44px;
  width: 335px;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  height: 44px;
  width: 332px;
`;

const DescriptionDiv = styled.div`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #657786;
`;

const NumberDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface OtpDescriptionProps {
  description: string | JSX.Element;
  phoneNumber?: string;
  text?: string;
}

const OTPDescription: React.FC<OtpDescriptionProps> = ({
  description,
  phoneNumber,
  text,
}) => {
  return (
    <Container>
      <InnerContainer>
        <DescriptionDiv>{description} </DescriptionDiv>
        <NumberDiv>
          {phoneNumber && (
            <p style={{ color: "#4C9EEB", margin: "0" }}>+91-{phoneNumber}</p>
          )}
          <DescriptionDiv>{text}</DescriptionDiv>
        </NumberDiv>
      </InnerContainer>
    </Container>
  );
};

export default OTPDescription;
