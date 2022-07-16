import React, { useEffect, useRef } from 'react';
import TransactionComp from './TransactionComp';
import { useSelector } from 'react-redux';

const Transaction = () => {

  const newTransaction = useSelector(state => state.addTransaction.data);
  const transactions = useSelector(state => state.getTransaction.data);
  const inputRef = useRef();

  useEffect(() => {
    if(inputRef && inputRef.current){
      const { scrollHeight, clientHeight } = inputRef.current;
      
      inputRef.current.scrollTo({
        left:0, top:scrollHeight - clientHeight,
        behavior:"smooth" 
      });
    }
  }, [transactions])
  

  return (
    <div className='transaction-wrap'>
        <div className="transaction">
            <h1>Transaction</h1>
            <p>View All</p>
        </div>
        <div className="transaction-list" ref={inputRef}>
            <ul>
              {
                transactions.map(item => (
                  <TransactionComp item={item}/>
                ))
              }
            </ul>
        </div>
    </div>
  )
}

export default Transaction