import React from 'react'
import './SendMail.css'
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';



function SendMail() {
  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
             <h3>New Message</h3>
             <CancelIcon className='sendMail_close' />
        </div>

        <form>
            <input placeholder='To' type='text'/>
            <input placeholder='Subject' type='text'/>
            <input placeholder='Message...' type='text' className='sendMail_message'/>
            
            <div className='sendMail_options'>
              <Button  
                variant="contained"
                color="primary" 
                className='sendMail_send'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail