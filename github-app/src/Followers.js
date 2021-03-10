import axios from "axios";
import React from "react";
import GitHubUsers from "./GitHubUsers";

class Followers extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/AD9018/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.followers.map((user) => {
          return <p>{user.login}</p>;
        })}
      </div>
    );
  }
}
export default Followers;
