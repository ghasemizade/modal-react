import React from 'react'
import './Modal.css'

function Modal({children}) {
  return (
    <div className='cd-popup is-visible' role='alert'>
        <div className='cd-popup-container'>
            <p>Are you sure?</p>
            <ul className='cd-buttons'>
                <li><a href="#0">Yes</a></li>
                <li><a href="#0">No</a></li>
            </ul>
            <a href="#0" className='cd-popup-close img-replace'>Close</a>
        </div>
    </div>
  )
}

export default Modal