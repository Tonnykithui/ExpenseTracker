import React from 'react';
import { GiExpense } from "react-icons/gi";
import { MdOutlineSavings } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { motion } from 'framer-motion';
import { deleteTransactionThunk } from '../../redux';
import { useDispatch } from 'react-redux';

const TransactionComp = ({ item }) => {
    const dispatch = useDispatch();
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
        <div className={item.cat === "Income" ? 'logo bg-yellow-400' : 'logo bg-red-400'}>
            {
                item.cat === "Income" ? <MdOutlineSavings /> : <GiExpense />
            }
        </div>
        <div className='wording'>
            <h2>{item.note}</h2>
        </div>
        <div className="amount-time">
            <h3>${item.amount}</h3>
            <p>{item.today}</p>
        </div>
        <div className="delete" onClick={() => dispatch(deleteTransactionThunk(item.id))}>
            <RiDeleteBin5Line />
        </div>
    </motion.li>
  )
}

export default TransactionComp
