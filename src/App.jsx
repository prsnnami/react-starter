import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Router from './router/Router'
import routes from './router/config'
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  padding: 10px;
  background-color: red;
  > div {
    float: right;
  }
  a {
    padding: 0 10px;
    text-decoration: none;
    color: white;
  }
`


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }
  }

  login = () => {
    this.setState({isLoggedIn: true})
  }
  
  logout = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    return (
      <div className="App">
        <Header>
          <div>
            <a onClick={this.login}>Login</a>
            <a onClick={this.logout}>Logout</a>
          </div>
          <Link to="/forum">Forum</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/open">Open</Link>
        </Header>
        <Router userAuthStatus={this.state.isLoggedIn} routes={routes} />
      </div>
    );
  }
}

export default App;
