import React from "react";
import GitHubUsers from "./GitHubUsers";
import Followers from "./Followers";
import "./App.css";

class App extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Git-Hub User Cards</h1>
        <GitHubUsers />
        <Followers />
      </div>
    );
  }
}

export default App;
