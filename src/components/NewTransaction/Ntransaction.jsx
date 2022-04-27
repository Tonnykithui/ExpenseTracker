import React from 'react'
import TrFrom from './TrFrom'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { HideModalForm } from '../../redux';

const Ntransaction = () => {

  const dispatch = useDispatch();

  return (
    <div className='Ntransaction-wrap'>
        <div className="Ntransaction">
            <div className='close'>
                <div className="close-btn" onClick={() => dispatch(HideModalForm())}>
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