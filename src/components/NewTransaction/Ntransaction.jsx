import React from 'react'
import TrFrom from './TrFrom'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { HideModalForm } from '../../redux';
import { motion } from 'framer-motion';

const Ntransaction = () => {

  const dispatch = useDispatch();

  return (
    <motion.div className='Ntransaction-wrap'
    animate={{
      y:0,
      opacity:1
    }}

    initial={{
      y:'100%',
      opacity:0
    }}

    transition={{
      type:'spring',
      stiffness:"200",
      duration:2
    }}
    >
        <div className="Ntransaction">
            <div className='close'>
                <div className="close-btn" onClick={() => dispatch(HideModalForm())}>
                <AiOutlineClose />
                </div>
            </div>
            <h2>Add Transaction</h2>
            <TrFrom />
        </div>
    </motion.div>
  )
}

export default Ntransaction