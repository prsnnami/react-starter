import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

class Router extends Component {

  renderLayout = (route, isPublic) => {
    return (
      <Route path={route.path} key={route.path} exact render={() => {
        if (!isPublic) {
          if (!this.props.userAuthStatus) return <Redirect to={this.props.routes.find(i => i.authCheck && i.isPublic).path} />
        } else {
          if (this.props.userAuthStatus && route.authCheck) return <Redirect to={this.props.routes.find(i => i.authCheck && !i.isPublic).path} />
        }
        return (
          <route.component>
            <Switch>
              {route.children.map(child => {
                return <Route key={child.path} path={route.path + child.path} exact component={child.component}/>  
              })}
            </Switch>
          </route.component>
        )            
      }} />
    )
  }

  renderRoute = (route, isPublic) => {
    return (
      <Route path={route.path} key={route.path} exact render={() => {
        if (!isPublic) {
          if (!this.props.userAuthStatus) return <Redirect to={this.props.routes.find(i => i.authCheck && i.isPublic).path} />
        } else {
          if (this.props.userAuthStatus && route.authCheck) return <Redirect to={this.props.routes.find(i => i.authCheck && !i.isPublic).path} />
        }
        return <route.component/>
      }} />
    )
  }

  renderArray = (arr, isPublic) => {
    return arr.map(route => {
      if (route.children) return this.renderLayout(route, isPublic)
      return this.renderRoute(route, isPublic)
    })
  }

  publicRoutes = () => {
    let pub = this.props.routes.filter(route => route.isPublic) 
    return this.renderArray(pub, true)
  }

  restrictedRoutes = () => {
    let res = this.props.routes.filter(route => !route.isPublic)
    return this.renderArray(res, false)
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          {this.publicRoutes()}
          {this.restrictedRoutes()}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Router;