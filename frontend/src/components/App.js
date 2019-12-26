import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPosts from "../pages/AllPosts";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/allposts" exact component={AllPosts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
