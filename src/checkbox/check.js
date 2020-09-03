import React, { Component } from 'react'

import CheckBox from './CheckBox'

class Check extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruites: [
        { id: 1, value: 'Vijayawada', isChecked: false },
        { id: 2, value: '	Machilipatnam', isChecked: false },
        { id: 3, value: 'Gudivada', isChecked: false },
        { id: 4, value: 'Nuzvid', isChecked: false },
      ],
    }
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach((fruite) => {
      fruite.isChecked = event.target.checked

      if (fruite.isChecked) {
        console.log(fruite.value)
      }
    })
    this.setState({ fruites: fruites })
  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked
      if (fruite.isChecked) {
        console.log(fruite.value)
      }
    })
    this.setState({ fruites: fruites })
  }

  render() {
    return (
      <div className="App">
        {/* <h1> Check and Uncheck All Example </h1> */}
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{' '}
        Krishna
        <ul>
          {this.state.fruites.map((fruite, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Check
