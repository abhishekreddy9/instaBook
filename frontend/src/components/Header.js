import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #1a237e;
  justify-content: space-between;
  height: 48px;
`;

const HamborgerContainter = styled.div`
  width: 55px;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
`;

const TabItem = styled.li`
  padding: 10px;
  color: rgba(255, 255, 255, 0.9);
`;

const Hamborger = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;

const HamborgerClickElement = styled.div`
  color: black;
  font-size: 30px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggleSideNav = () => {
    if (this.state.toggle === false) {
      this.setState({
        toggle: true
      });
    } else {
      this.setState({
        toggle: false
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <SideNav show={this.state.toggle} />
        <Container>
          <MenuItem>
            <Tabs>
              <TabItem onClick={this.toggleSideNav}>
                <HamborgerContainter>
                  {!this.state.toggle && <Icon name="bars" size="large" />}
                  {this.state.toggle && (
                    <HamborgerClickElement>
                      {"     "}
                      <div className="x">X</div>
                    </HamborgerClickElement>
                  )}
                </HamborgerContainter>
              </TabItem>
              <TabItem>
                <Link to="/" className="headerFont">
                  Home
                </Link>
              </TabItem>
              <TabItem>
                <Link to="/allposts" className="headerFont">
                  All Posts
                </Link>
              </TabItem>
            </Tabs>
          </MenuItem>
          <MenuItem>
            <Tabs>
              <TabItem>Sign In</TabItem>
            </Tabs>
          </MenuItem>
        </Container>
      </React.Fragment>
    );
  }
}

export default Header;
