import React from 'react'
import './Modal.css';
const Modal = ({score}) => {
  return (
    <div>
        <div className='score'>
            Skor : {score}
        </div>
        <div className='modal-btn' onClick={()=> window.location = "/"}>Yeniden Başla</div>
    </div>
  )
}

export default Modal