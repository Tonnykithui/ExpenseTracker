import React from 'react'
import Card from '../Card/Card'
import Foot from '../Footer/Foot'
import Ntransaction from '../NewTransaction/Ntransaction'
import Transaction from '../Transaction/Transaction'
import Welcome from '../Welcome/Welcome'

const AppW = () => {
  return (
    <div className='app-wrap'>
        <div className="app-contents">
            <Welcome />
            <Card />
            <Transaction />
            <Foot />
            <Ntransaction />
        </div>
    </div>
  )
}

export default AppW