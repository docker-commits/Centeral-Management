import React from 'react'
import fire from './config/fire'

class Sucessfull extends React.Component {
  logout() {
    fire.auth().signOut()
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Login sucess</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Sucessfull
