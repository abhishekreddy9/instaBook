import React from "react";
import Posts from "../components/Posts";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
`;

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount = async () => {
    try {
      const data = await axios.get("http://localhost:3000/posts/all");
      this.setState({
        data: data.data
      });
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.data.length === 0) {
      return <div>Loading</div>;
    } else {
      return (
        <MainContainer>
          <Posts data={this.state.data} />
        </MainContainer>
      );
    }
  }
}

export default AllPosts;
