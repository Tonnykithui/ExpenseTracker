import React, { useEffect } from 'react'
import Card from '../Card/Card'
import Foot from '../Footer/Foot'
import Ntransaction from '../NewTransaction/Ntransaction'
import Transaction from '../Transaction/Transaction'
import Welcome from '../Welcome/Welcome'
import { useSelector, useDispatch } from 'react-redux';
import { getTransThunk } from '../../redux'

const AppW = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransThunk());
  }, []);

  const showForm = useSelector(state => state.addTransactionForm.loading);
  return (
    <div className='app-wrap'>
        <div className="app-contents">
            <Welcome />
            <Card />
            <Transaction />
            <Foot />
            {
              showForm ? (
                <Ntransaction />
              ) : ''
            }
            
        </div>
    </div>
  )
}

export default AppW