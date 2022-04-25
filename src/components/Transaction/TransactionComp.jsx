import React from 'react';
import { GiExpense } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from 'framer-motion';

const TransactionComp = () => {
    const liV = {
        hidden:{
            x:"-100%",
            opacity:0
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:0.8
            }
        }
    }
  return (
    <motion.li className="transaction-component"
    variants={liV}
    animate="visible"
    initial="hidden"
    >
        <div className='logo'>
            <MdOutlineSavings />
        </div>
        <div className='wording'>
            <h2>Food</h2>
        </div>
        <div className="amount-time">
            <h3>$43.00</h3>
            <p>4/25/2022</p>
        </div>
        <div className="delete">
            <RiDeleteBin5Line />
        </div>
    </motion.li>
  )
}

export default TransactionComp

{/* <GiExpense /> */}