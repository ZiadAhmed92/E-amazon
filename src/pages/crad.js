import FormaterPrice from '@/Components/FormaterPrice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";

import Head from 'next/head';
import { resetCart } from '@/store/nextSlice';
const crad = () => {
  const { cartProducts } = useSelector((state) => state.items)
  const dispatch = useDispatch();
  console.log(cartProducts.length)
  return (
    <>
      <Head>
        <title>Store Cart</title>
      </Head>
      <div className='container-fluid '>
        <div className='row py-4 gy-3'>

          <div className='col-md-9 '>
            <div className='container-fluid bg-white container-crad'>
              <div className='row  p-2 '>
                <div className='col-md-12  d-flex align-items-center justify-content-between'>
                  <h3>Shopping Cart</h3>
                  <h4>Subtotal</h4>
                </div>
                <hr />
                {cartProducts.map(({
                  _id,
                  title,
                  description,
                  oldPrice,
                  price,
                  brand,
                  image,
                  isNew,
                  category,
                  quantity
                }) => (
                  <div className='col-md-12 py-3' key={_id}>
                    <div className='crad-mobile d-flex align-items-center justify-content-between position-relative'>
                      <Image
                        src={image}
                        className='image'
                        style={{ borderRadius: "10px 10px 0 0" }}
                        width={150}
                        height={150}
                        alt="find gift for dad image"
                      />
                      <div>
                        <h5 className='fw-bold'>{title}</h5>
                        <p>{description}</p>
                        <p className='d-flex'>unit price : <span className='fw-bold'><FormaterPrice amount={price} /></span></p>
                        <div className='d-flex align-items-center gap-5'>
                          <div className='crad-quantity'>
                            <span><HiOutlinePlus className='icon' /></span>
                            <span>{quantity}</span>
                            <span> <HiOutlineMinus className='icon' /></span>
                          </div>
                          <span className='remove'>
                            <VscChromeClose /> remove
                          </span>

                        </div>
                      </div>
                      <div className='position-absolute amount'>
                        <FormaterPrice amount={price * quantity} />
                      </div>

                    </div>
                  </div>
                ))}
                {cartProducts.length > 0 ? <button onClick={() => dispatch(resetCart())} className='btn btn-danger w-25 m-auto my-3'>Reset Cart</button> : ""}
                {cartProducts.length > 0 ? "" : <h1 className='text-center'>No produce</h1>}
              </div>
            </div>
          </div>

          <div className='col-md-3 '>
            <div className='bg-white container-crad p-2'>
              ahmed
            </div>
          </div>
        </div>

      </div> </>
  )
}

export default crad