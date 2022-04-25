import React from 'react'
import Card from '../Card/Card'
import Welcome from '../Welcome/Welcome'

const AppW = () => {
  return (
    <div className='app-wrap'>
        <div className="app-contents">
            <Welcome />
            <Card />
        </div>
    </div>
  )
}

export default AppW