import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-transform: uppercase;
  background-clip: text;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  background-color: #565656;
  color: transparent;
  text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`

class Forum extends Component {
  render() {
    return (
      <Title>Page 1</Title>
    );
  }
}

export default Forum;