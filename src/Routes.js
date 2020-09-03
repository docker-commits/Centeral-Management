import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import UserControl from './UserControl'
import CreateNewIssue from './CreateNewIssue'
import CardR from './CardR'
import AddMembers from './AddMembers'
import history from './history'
import ViewIssues from './ViewIssues'
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserControl} />
          <Route path="/createnewissue" component={CreateNewIssue} />
          <Route path="/issue" component={CardR} />
          <Route path="/viewissues" component={ViewIssues} />

          <Route path="/addmembers" component={AddMembers} />
        </Switch>
      </Router>
    )
  }
}
