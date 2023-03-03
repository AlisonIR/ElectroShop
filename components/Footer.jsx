import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer-container'>
     <p>2023 Estuches Roa All rights reserved</p>
     <p className='icons'>
      <a href="https://www.instagram.com/estuches_roa/?igshid=YmMyMTA2M2Y%3D">
      <AiFillInstagram/>
      </a>
      <a href='https://wa.me/c/5493624205882'>
      <RiWhatsappFill/>
      </a>
     </p>
    </div>
  )
}

export default Footer