import React from 'react'
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import './Mail.css'

function Mail() {
  const navigate = useNavigate();

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon/>
          </IconButton>
          <IconButton>
            <ErrorIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <EmailIcon/>
          </IconButton>
          <IconButton>
            <WatchLaterIcon/>
          </IconButton>
          <IconButton>
            <CheckCircleIcon/>
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        
        <div className='mail_toolsRight'>
        <IconButton>
            <UnfoldMoreIcon/>
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>
      
      </div>
        <div className='mail_body'>
          <div className='mail_bodyHeader'>
            <h2>Subject</h2>
            <LabelImportantIcon className='mail_important' />
            <p>Title</p>
            <p className='mail_time'>1800</p>
          </div>

          <div className='mail_message'>
            <p>Test Mail Message</p>
          </div>
        </div>
    </div>
  )
}

export default Mail