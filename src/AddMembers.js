import React from 'react'
import './AddMembers.css'
import { Select, InputLabel, FormControl, MenuItem } from '@material-ui/core'

function AddMembers() {
  return (
    <div className="add__member">
      <div className="add__memberHeader">
        <h1>Add Members</h1>
      </div>
      <div className="add__memberBody">
        <form className="create__form">
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="your name" />

          <FormControl variant="outlined" className="Category__Tag">
            <InputLabel id="demo-simple-select-outlined-label">
              District
            </InputLabel>
            <Select label="Category Tag">
              <MenuItem value="">Krishna</MenuItem>
              <MenuItem value="">Prakasham</MenuItem>
              <MenuItem value="">Guntur</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="Category__Tag">
            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
            <Select label="Category Tag">
              <MenuItem value="">Vijayawada</MenuItem>
              <MenuItem value="">Vizag</MenuItem>
              <MenuItem value="">Tenali</MenuItem>
            </Select>
          </FormControl>
          <input type="number" placeholder="Age" />
        </form>
      </div>
      <div className="add__memberFooter">
        <button type="submit">Add Member</button>
      </div>
    </div>
  )
}

export default AddMembers
