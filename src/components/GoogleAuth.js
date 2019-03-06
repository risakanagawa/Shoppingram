import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "402559225385-gbh1t61nesgt5busa9ii6gjgm43a0fg3.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange() {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignIn() {
    this.auth.SignIn();
  }

  onSignOut() {
    this.auth.SignOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>Google</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
