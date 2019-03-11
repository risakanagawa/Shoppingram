import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderBar from "./Header";
import itemCreate from "../contents/itemCreate";
import itemList from "../contents/itemList";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Switch>
            <HeaderBar />
            <Route path="/" exact component={itemList} />
            <Route path="/shopping/new" exact component={itemCreate} />
            </ Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
