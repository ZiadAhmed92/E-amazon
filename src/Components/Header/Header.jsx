import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../../image/logo.png'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import cartIcon from "../../image/cartIcon.png"
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser } from '../../store/nextSlice';
const Header = () => {

  let dispatch = useDispatch();
  const { data: session, status } = useSession()
  const { cartProducts, userInfo, favoriteProducts } = useSelector((state) => state.items)

  useEffect(() => {
    if (session) {
      dispatch(addUser({
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image
      }))
    }
    console.log(userInfo)
  }, [session])

  return (
    <div className='header p-2 d-flex align-items-center justify-content-center gap-2 ' style={{ background: "#131921" }}>
      <Link href={"/"} style={{ textDecoration: "none" }}><div className='img-header'> <Image src={logo} width={100} height={50} priority={true} className='mx-3 mt-1' alt='logo' /></div></Link>
      <div className='location text-white d-flex align-items-center gap-2   ' >
        <SlLocationPin />
        <h6 className='text-header text-center'>Deliver to <span className='d-block text-white'>Egypt</span></h6>
      </div>
      <div className='input bg-info'>
        <input type='text' className='form-control ' placeholder='search amazon clone project' />
        <span className='icon-search '><HiOutlineSearch className='fs-4' /></span>
      </div>
      {userInfo ? <div className='sign-in2 d-flex align-items-center justify-content-center'>
<Image src={userInfo.image} width={50} height={50} style={{borderRadius:"50%"}}/>
<div>
  <h6 className='text-email'>Name : {userInfo.name}</h6>
  <h6 className='text-email'>{userInfo.email}</h6>
</div>
      </div> : <div onClick={() => signIn()} className='sign-in '>
        <h6 className='sign-in-1'>Hello,sign in</h6>
        <h6 className="sign-in-2">
          Account&Lists

          <BiCaretDown />

        </h6>
      </div>}

      <Link href={"/favourit"} style={{ textDecoration: "none" }}>
        <div className='sign-in'>
          <div className='d-flex align-items-center justify-content-center'>
            <h6 className='sign-in-1 '>Marked</h6>
            {favoriteProducts.length > 0 ? <h6 className='px-1 border num-favourit'>{favoriteProducts.length}</h6> : ""}
          </div>
          <h6 className="font-bold text-white">&favorite</h6>
        </div>
      </Link>
      <Link href={"/crad"} style={{ textDecoration: "none" }}>
        <div className='cart'>
          <Image
            width={100}
            height={30}
            priority={true}
            className="img-cart"
            src={cartIcon}
            alt="cart icon"
          />
          <div className='text-cart'><p className="fw-bold ">Cart</p></div>
          <p className="num-cart ">
            {cartProducts.length ? cartProducts.length : 0}
          </p>
        </div>
      </Link>

    </div>
  )
}

export default Header