import React, { Component } from 'react'
import './CardR.css'
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import NativeSelect from '@material-ui/core/NativeSelect'
import Chip from '@material-ui/core/Chip'
import Header from './components/Header'

// import ShareIcon from '@material-ui/icons/Share'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
// import fire from './config/fire'
import Issues from './Issues'
export class CardR extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // updateName: [],
      // updateId: [],
      // updateImg: [],
      Data: [],
    }
  }
  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5f3f6656993a2e110d32c0b7')
      .then((res) => res.json())
      .then((Data) => {
        this.setState({ Data })
      })
  }
  render() {
    return (
      <div>
        <Header />
        <div class="card">
          <div className="card__chipsHeader">
            {this.state.Data.map((item, index) => (
              <Chip
                size="small"
                color="primary"
                // onClick={this.clickMe.bind(this, item)}
                label={item.name}
              />
            ))}
          </div>
          <Issues />
        </div>
      </div>
    )
  }
}

export default CardR
