import React from "react";
import styled, { keyframes } from "styled-components";
import UserPostProfilePic from "./UserPostProfilePic";
import Like from "./Like";

const Container = styled.div`
  width: 100%;
  border: 2px solid #efefef;
  height: 620px;
  margin: 10px 0px 20px 0px;
  background-color: white;
`;

const LikeContainer = styled.div`
  margin: 15px 0 0 15px;
`;

const UserProfilePicContainer = styled.div`
  height: 50px;
`;

const ImageKeyFrame = keyframes`
0%{opacity:0;}
50%{opacity:0.5;}
100%{opacity:0.9;}`;

const ImageContainer = styled.div`
  height: 500px;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  opacity: ${props => (props.animation ? "1" : "0")};
  transition: all 0.3s ease-out;
  animation: ${ImageKeyFrame} 1s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animation: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: true });
    }, 100);
  }

  clicked = () => {
    console.log("clicked");
  };

  render() {
    return (
      <Container>
        <UserProfilePicContainer>
          <UserPostProfilePic
            name={this.props.data.userId.name}
            photo={this.props.data.image}
          />
        </UserProfilePicContainer>
        <ImageContainer
          url={this.props.data.image}
          animation={this.state.animation}
        />
        <LikeContainer>
          <Like />
        </LikeContainer>
      </Container>
    );
  }
}

export default PostItem;
