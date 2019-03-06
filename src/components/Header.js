import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Modal } from "semantic-ui-react";

import GoogleAuth from './GoogleAuth';
import "./style.scss";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header-bar ui segment menu">
        <Link to="/" className="item">
          Shoppingram
        </Link>
        <div className="menu right">
          <Link to="/shopping/new" className="item right">
            Create
          </Link>
          <Modal trigger={<Button >Login</Button>}>
            <Modal.Header className='center'>Login</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Login with Google</Header>
                <p>Login with Google allows you to custamize your original shopping todo!</p>
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
