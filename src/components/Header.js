import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Modal } from "semantic-ui-react";

import GoogleAuth from "./GoogleAuth";
import "./style.scss";
import SearchForm from "./SearchForm";

class HeaderBar extends React.Component {

  genarateBtn = () => {
    return (
      <Button>
        <Link to="/new" className="right">
          Genarate your board
        </Link>
      </Button>
    );
  };

  rightHeader() {
    const isLogin = this.props.isSignedIn;
    const shouldLogin = isLogin ? "Logout" : "LogIn";
    return (
      <div>
        {isLogin ? this.genarateBtn() : null }
        <Modal trigger={<Button>{shouldLogin}</Button>}>
          <Modal.Header className="center">{shouldLogin}</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Login with Google</Header>
              <p>Logging in with Google allows you to store articles!</p>
              <GoogleAuth />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <div className="header-bar ui segment menu">
        <Link to="/" className="item">
          Later Reads
        </Link>
        <SearchForm />
        <div className="menu right" />
        {this.rightHeader()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(HeaderBar);
