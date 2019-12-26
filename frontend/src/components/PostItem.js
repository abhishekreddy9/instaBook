import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  border: 2px solid #efefef;
  height: 600px;
  margin: 10px 0px 20px 0px;
  background-color: white;
`;

const ImageContainer = styled.div`
  height: 500px;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  opacity: ${props => (props.animation ? "1" : "0")};
  transition: all 0.3s ease-out;
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

  render() {
    return (
      <Container>
        <ImageContainer
          url={this.props.data.image}
          animation={this.state.animation}
        />
        <h1>{this.props.data.description}</h1>
      </Container>
    );
  }
}

export default PostItem;
