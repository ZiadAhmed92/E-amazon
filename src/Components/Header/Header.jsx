import Image from 'next/image'
import React from 'react'
import logo from '../../image/logo.png'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import cartIcon from "../../image/cartIcon.png"
const Header = () => {
  return (
    <div className='header bg-dark p-2 d-flex align-items-center gap-3'>
      <div className='img-header'> <Image src={logo} width={100} height={50} className='  mx-3 mt-1' alt='logo' /></div>
      <div className='location text-white d-flex align-items-center gap-2   ' >
        <SlLocationPin />
        <h6 className='text-header text-center'>Deliver to <span className='d-block text-white'>Egypt</span></h6>
      </div>
      <div className='input bg-info'>
        <input type='text' className='form-control ' placeholder='search amazon clone project' />
        <span className='icon-search '><HiOutlineSearch className='fs-4' /></span>
      </div>
      <div className='sign-in '>
        <h6 className='sign-in-1'>Hello,sign in</h6>
        <h6 className="sign-in-2">
          Account&Lists
        
           <BiCaretDown />
        
        </h6>
      </div>
      <div className='sign-in'>
        <h6 className='sign-in-1'>Marked</h6>
        <h6 className="font-bold text-white">&favorite</h6>
      </div>
      <div className='cart'>
      <Image
            className="img-cart"
            src={cartIcon}
            alt="cart icon"
          />
          <div className='text-cart'><p className="fw-bold">Cart</p></div>
          <p className="num-cart ">
            0
          </p>
      </div>
    </div>
  )
}

export default Header