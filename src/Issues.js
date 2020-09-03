import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import NativeSelect from '@material-ui/core/NativeSelect'
import Chip from '@material-ui/core/Chip'

import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Issues() {
  return (
    <div>
      <Card className="card__card">
        <CardContent>
          <div className="card__header">
            <div className="card__headerLeft">
              <h1>Xamarin Developer</h1>

              <select className="drpdown__style">
                <option selected value="coconut">
                  open
                </option>
                <option value="pending">close</option>
              </select>
              <CheckCircleIcon />
              <h5>Approved a day ago</h5>
            </div>
            <div className="card__headerRight">
              <ShareIcon fontSize="small" />
              <MoreVertIcon fontSize="small" />
            </div>
          </div>
          <div className="card__body">
            <p> For Remote/ Wrok from home,</p>
            <p>Hyderabad</p>
            <p>|</p>
            <p> Created by Serit</p>
            <p>|</p>
            <p> 4 Aug </p>
          </div>
          <div className="body__footer">
            <p className="recom">
              50 Recommendations
              <span>
                <Chip
                  className="chip__style"
                  label="50 New"
                  color="secondary"
                  size="small"
                  variant="outlined"
                />
              </span>
            </p>
            <p>0 Applies</p>
            <p>0 My Shortlist</p>
            <p>0 Interviews</p>
            <p>0 Offered</p>
            <p>0 Joined</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Issues
