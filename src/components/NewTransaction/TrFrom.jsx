import React from 'react'
import { motion } from "framer-motion";

const TrFrom = () => {
  return (
    <form >
        <div className='form-control'>
            <label>Category</label>
            <select name="" id="">
                <option value="">Income</option>
                <option value="">Expense</option>
            </select>
        </div>
        <div className='form-control'>
            <input type="text" placeholder='Note' />
        </div>
        <div className='form-control'>
            <input type="number" placeholder='Amount' />
        </div>
        <div className='form-control'>
            <motion.button 
            className='btn'
            whileHover={{
                scale:'1.1'
            }}

            whileTap={{
                scale:'0.8'
            }}
            >
                Submit
            </motion.button>
        </div>
    </form>
  )
}

export default TrFrom