import React, { Component } from 'react';

import { withRouter } from "react-router-dom";
import AppRouter from "app/routes";
import './App.css';

export class App extends Component {

  redirectTo = (props) => {
    const parentPath =
      props.match.path === "/" ? "" : `${props.match.path}`;
    return <AppRouter parentPath={parentPath} />;
  };

  render() {
    return (
      <div className="App" id="app">
        {this.redirectTo(this.props)}
      </div>

    );
  }
}

export default withRouter(App);