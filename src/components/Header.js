import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
const Header = () => {
  return (
    <div className='component__header'>
      <h5>Home</h5>
      <div className='component__header-icons'>
        <IoMdPaw />
        <BiMessage />
        <AiOutlineBell />
      </div>
    </div>
  )
}

export default Header
