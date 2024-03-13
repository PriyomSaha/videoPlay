import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Title>Oops! Page Not Found</Title>
      <Description>
        We're sorry, but the page you are looking for does not exist.
        <br />
        Don't worry! You can go back to the <BackLink to="/">homepage</BackLink>
        .
      </Description>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
