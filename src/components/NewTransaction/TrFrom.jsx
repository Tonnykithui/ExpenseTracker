import React from 'react'

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
            <button className='btn'>Submit</button>
        </div>
    </form>
  )
}

export default TrFrom