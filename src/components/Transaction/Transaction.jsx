import React from 'react'
import TransactionComp from './TransactionComp'

const Transaction = () => {
  return (
    <div className='transaction-wrap'>
        <div className="transaction">
            <h1>Transaction</h1>
            <p>View All</p>
        </div>
        <div className="transaction-list">
            <ul>
                <TransactionComp />
                <TransactionComp />
                <TransactionComp />
                <TransactionComp />
            </ul>
        </div>
    </div>
  )
}

export default Transaction