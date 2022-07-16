import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Card = () => {

    const transactionDetails = useSelector(state => state.getTransaction.data);
    const incomeTotal = transactionDetails.filter(transaction => transaction.cat === 'Income')
                        .reduce((t,n) => t + n.amount, 0);
    const expenseTotal = transactionDetails.filter(transaction => transaction.cat === 'Expense')
                        .reduce((t,n) => t + n.amount, 0);

    const totalBalance = incomeTotal - expenseTotal;

  return (
    <div className='card-wrap'>
        <div className="card">
            <div className="card-top">
                <p>Total Balance</p>
                <h2>${totalBalance}</h2>
            </div>
            <div className="card-bottom">
                <div className="card-left">
                    <div className="logo-card-left">
                        <AiOutlineArrowDown />
                    </div>
                    <div className="card-left-amount">
                        <p>Income</p>
                        <h3>${incomeTotal}</h3>
                    </div>
                </div>
                <div className="card-right">
                    <div className="logo-card-right">
                        <AiOutlineArrowUp />
                    </div>
                    <div className="card-right-amount">
                        <p>Expense</p>
                        <h3>${expenseTotal}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card