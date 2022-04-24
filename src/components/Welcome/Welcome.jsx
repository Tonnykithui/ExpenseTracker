import React from 'react'
import { FiSettings } from "react-icons/fi";
import { BsPersonCircle } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="img-txt">
        <div className="img">
            <BsPersonCircle />
        </div>
        <div className="welcome-txt-name">
            <p>Welcome!</p>
            <h3>Jon Doe</h3>
        </div>
        </div>
        <div className="welcome-settings">
            <div className="settings">
            <FiSettings />
            </div>
        </div>
    </div>
  )
}

export default Welcome