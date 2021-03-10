import React from "react";
import axios from "axios";

class GitHubUsers extends React.Component {
  state = {
    user: [{}],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/AD9018")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.user.login}</h2>
      </div>
    );
  }
}
export default GitHubUsers;
