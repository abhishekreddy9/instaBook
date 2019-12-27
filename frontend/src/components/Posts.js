import React from "react";
import styled from "styled-components";
import PostItem from "../components/PostItem";

const Container = styled.div`
  width: 614px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  margin: 10px;
  overflow: hidden;
`;

const Posts = props => {
  console.log(props.data);

  const items = props.data.map(item => {
    return <PostItem key={item._id} data={item} />;
  });

  return <Container>{items}</Container>;
};

export default Posts;
