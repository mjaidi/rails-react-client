import React, { Component } from "react";
import "../stylesheets/App.css";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import ArticleList from "./ArticleList";
import ArticleInfo from "./ArticleInfo";
import ArticleAdd from "./ArticleAdd";
import ArticleEdit from "./ArticleEdit";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }
  rerenderParentCallback() {
    this.forceUpdate();
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Main rerenderParentCallback={this.rerenderParentCallback} />
        </div>
      </Router>
    );
  }
}

const Main = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/login"
      render={prop => (
        <Login
          {...prop}
          rerenderParentCallback={props.rerenderParentCallback}
        />
      )}
    />
    <Route
      exact
      path="/logout"
      render={prop => (
        <Logout
          {...prop}
          rerenderParentCallback={props.rerenderParentCallback}
        />
      )}
    />
    <Route exact path="/articles" component={ArticleList} />
    <Route exact path="/articles/new" component={ArticleAdd} />
    <Route exact path="/articles/:id" component={ArticleInfo} />
    <Route exact path="/articles/:id/edit" component={ArticleEdit} />
  </Switch>
);

export default App;
