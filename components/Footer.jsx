import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer-container'>
     <p>2023 ElectroShop All rights reserved</p>
     <p className='icons'>
      <a>
      <AiFillInstagram/>
      </a>
      <a>
      <RiWhatsappFill/>
      </a>
     </p>
    </div>
  )
}

export default Footer