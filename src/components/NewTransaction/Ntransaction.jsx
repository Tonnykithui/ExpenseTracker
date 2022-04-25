import React from 'react'
import TrFrom from './TrFrom'
import { AiOutlineClose } from "react-icons/ai";

const Ntransaction = () => {
  return (
    <div className='Ntransaction-wrap'>
        <div className="transaction">
            <div className='close'>
                <div className="close-btn">
                <AiOutlineClose />
                </div>
            </div>
            <h2>Add Transaction</h2>
            <TrFrom />
        </div>
    </div>
  )
}

export default Ntransaction