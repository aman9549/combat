import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './button.css'
const Button = ({text, btns}) => {
  return (
    <>
    <div className={`btn-con ${btns}`} >
    <a href="" className='btn'>{text} <FaArrowRightLong /></a>
    </div>
    </>
  )
}

export default Button