import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  color: #f9bb22;
  line-height: 60px;
  font-size: 24px;
  font-weight: 700;
  padding-left: 10px;
  
`

const Children = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 100%;
  background-color: #ccc;
`

class MainLayout extends Component {

  render() {
    return (
      <Container>
        <Header>Layout 1</Header>
        <Children>
          {this.props.children}
        </Children>
      </Container>
    );
  }
}

export default MainLayout;