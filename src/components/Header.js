import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Modal } from "semantic-ui-react";

import GoogleAuth from "./GoogleAuth";
import "./style.scss";
import SearchForm from './SearchForm'

class HeaderBar extends React.Component {

  render() {
    return (
      <div className="header-bar ui segment menu">
        <Link to="/" className="item">
          Later Reads
        </Link>
        <SearchForm />
        <div className="menu right">
          <Button>
            <Link to="/shopping/new" className="right">
              Create your board
            </Link>
          </Button>
          <Modal trigger={<Button>Login</Button>}>
            <Modal.Header className="center">Login</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Login with Google</Header>
                <p>
                  Login with Google allows you to custamize your original
                  shopping todo!
                </p>
                <GoogleAuth />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
