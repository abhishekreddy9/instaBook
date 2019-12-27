import React from "react";
import { Icon, Button } from "semantic-ui-react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: false };
  }

  click = () => {
    if (this.state.like) {
      this.setState({ like: false });
    } else this.setState({ like: true });
    console.log("hgf");
  };

  render() {
    return (
      // {!this.state.toggle && <Icon name="bars" size="large" />}
      <div>
        {this.state.like && (
          <Icon name="like" color="red" size="big" onClick={this.click} />
        )}
        {!this.state.like && (
          <Icon name="like" color="grey" size="big" onClick={this.click} />
        )}
      </div>
    );
  }
}

export default Like;
