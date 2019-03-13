import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from "./Header";
import itemGenarate from "../contents/itemGenarate";
import itemList from "../contents/itemList";
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          {/* <Switch> */}
            <HeaderBar />
            <Route path="/" exact component={itemList} />
            <Route path="/new" exact component={itemGenarate} />
            {/* </ Switch> */}
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
