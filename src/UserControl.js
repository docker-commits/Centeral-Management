import React from 'react'
import fire from './config/fire'
import './UserControl.css'
import Check from './checkbox/check'
import history from './history'

class UserControl extends React.Component {
  signUp() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up')
      })
      .catch((err) => {
        console.log('Error: ' + err.toString())
      })
  }

  login() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In')
      })
      .catch((err) => {
        console.log('Error: ' + err.toString())
      })
  }

  render() {
    return (
      <div className="user__control">
        <div className="user__controlHeader">
          <h1>User Control</h1>
        </div>
        <div className="user__controlBody">
          <input id="email" placeholder="Enter Email.." type="text" />
          <input id="password" placeholder="Enter Password.." type="text" />
          <div className="check__boxControl">
            <Check />
          </div>
        </div>

        <div className="user__controlFooter">
          <button onClick={() => history.push('/createnewissue')}>Login</button>
        </div>
      </div>
    )
  }
}

export default UserControl
