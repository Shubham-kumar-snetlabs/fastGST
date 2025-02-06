import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 336px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #4d4d4d;
`;

interface isMemberProps {
  text: string;
  registerOrLogin: string;
}

const RegisterorLoginComponent: React.FC<isMemberProps> = ({
  text,
  registerOrLogin,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (registerOrLogin === "Register") {
      navigate("/");
    } else if (registerOrLogin === "Login") {
      navigate("/sign-in");
    }
  };
  return (
    <Container>
      {text}{" "}
      <span
        style={{ color: "#4C9EEB", marginLeft: "4px", cursor: "pointer" }}
        onClick={handleNavigate}
      >
        {registerOrLogin}
      </span>
    </Container>
  );
};

export default RegisterorLoginComponent;
