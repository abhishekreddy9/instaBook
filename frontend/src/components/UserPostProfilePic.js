import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const ImageContainer = styled.div`
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  border: 1px solid grey;
  &:hover {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    margin-left: 0px;
    box-shadow: 2px;
    z-index: 20;
  }
`;

const NameContainer = styled.div`
  margin-left: 10px;
`;

const UserPostProfilePic = props => {
  return (
    <Container>
      <ImageContainer url={props.photo} />
      <NameContainer>{props.name}</NameContainer>
    </Container>
  );
};

export default UserPostProfilePic;
