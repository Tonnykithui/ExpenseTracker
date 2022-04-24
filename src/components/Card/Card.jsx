import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const Card = () => {
  return (
    <div className='card-wrap'>
        <div className="card">
            <div className="card-top">
                <p>Total Balance</p>
                <h2>$42,000</h2>
            </div>
            <div className="card-bottom">
                <div className="card-left">
                    <div className="logo-card-left">
                        <AiOutlineArrowDown />
                    </div>
                    <div className="card-left-amount">
                        <p>Income</p>
                        <h3>$42,300</h3>
                    </div>
                </div>
                <div className="card-right">
                    <div className="logo-card-right">
                        <AiOutlineArrowUp />
                    </div>
                    <div className="card-right-amount">
                        <p>Expense</p>
                        <h3>$300</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card