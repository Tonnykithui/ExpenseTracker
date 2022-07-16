import React from 'react';
import { GrFormAdd } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { ShowModalForm } from '../../redux';

const Foot = () => {

  const dispatch = useDispatch();

  return (
    <div className='foot'>
        <div className="add-transaction" onClick={() => dispatch(ShowModalForm())}>
            <GrFormAdd />
        </div>
    </div>
  )
}

export default Foot