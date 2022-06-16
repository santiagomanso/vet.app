import React from 'react'
import './homeWelcome.css'
const HomeWelcome = ({ title, subtitle, btnTxt }) => {
  return (
    <div className='home__welcome'>
      <div className='home__welcome-header'>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <button className='btn btn-primary'>{btnTxt}</button>
    </div>
  )
}

export default HomeWelcome
