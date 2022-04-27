import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { addTransThunk } from '../../redux/AddTransaction/AddActions';
import { getTransThunk, HideModalForm } from '../../redux';

const TrFrom = () => {
    
    const dispatch = useDispatch();
    
    const [cat, setCat] = useState('Income');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(cat === "" || note === "" || amount === ""){
            alert("Provide full info")
        }
        let today = new Date().toISOString().slice(0, 10)
    
        const transaction = {
            cat,
            note,
            amount,
            today
        }

        console.log(transaction);
        dispatch(addTransThunk(transaction));
        dispatch(HideModalForm());
        dispatch(getTransThunk());
    }

    const handleSelect = e => {
        setCat(e.target.value);        
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className='form-control'>
            <label>Category</label>
            <select name="" id="" multiple={false} value={cat}
             onChange={handleSelect}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>
        <div className='form-control'>
            <input type="text" placeholder='Note' value={note} 
            onChange={e => setNote(e.target.value)} />
        </div>
        <div className='form-control'>
            <input type="number" placeholder={amount ? amount : 'Amount'} 
            value={amount} onChange={e => setAmount(e.target.value)}
            />
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