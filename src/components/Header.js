import React from 'react'
import './Header.css'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import history from '../history'
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FolderSharedIcon />
      </div>
      <div className="header__right">
        <button onClick={() => history.push('/viewissues')}>View Issues</button>
      </div>
    </div>
  )
}

export default Header
