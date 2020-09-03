import React from 'react'
import './CreateNewIssue.css'
import { Select, InputLabel, FormControl, MenuItem } from '@material-ui/core'
import history from './history'
function CreateNewIssue() {
  return (
    <div className="create__issue">
      <div className="create__issueHeader">
        <h1>Create New Issue</h1>
      </div>
      <div className="create__issueBody">
        <form className="create__form">
          <input
            type="text"
            placeholder="Add Issue Heading"
            className="issue__header"
          />
          <input type="text" placeholder="Issue Description if Any" />
          <FormControl variant="outlined" className="Category__Tag">
            <InputLabel id="demo-simple-select-outlined-label">
              Category Tag
            </InputLabel>
            <Select label="Category Tag">
              <MenuItem value="">water</MenuItem>
              <MenuItem value="">ground</MenuItem>
              <MenuItem value="">food</MenuItem>
            </Select>
          </FormControl>
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
        </form>
        <button type="upload">Upload File</button>
      </div>
      <div className="create__issueFooter">
        <button onClick={() => history.push('/issue')}>Add Issue</button>
      </div>
    </div>
  )
}

export default CreateNewIssue
