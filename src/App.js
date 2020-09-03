import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Paper from '@material-ui/core/Paper'
import FakeBody from './FakeBody'
import CardR from './CardR'
import Check from './checkbox/check'

// login
import Sucessfull from './Sucessfull'
import UserControl from './UserControl'
import fire from './config/fire'
import CreateNewIssue from './CreateNewIssue'
import AddMembers from './AddMembers'
import ViewIssues from './ViewIssues'
import Routes from './Routes'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this)
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    )
  }
}

export default App
