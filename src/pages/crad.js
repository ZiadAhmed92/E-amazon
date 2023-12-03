import FormaterPrice from '@/Components/FormaterPrice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { GiDandelionFlower } from "react-icons/gi";

import Head from 'next/head';
import { incrementByAmount, removeProduce, decrementByAmount, resetCart } from '@/store/nextSlice';
import Link from 'next/link';
const Crad = () => {
  const [sum, setSum] = useState(0)
  const { cartProducts } = useSelector((state) => state.items)
  const dispatch = useDispatch();




  useEffect(() => {
    setSum(0)
    cartProducts.forEach(({ quantity, price }) => {
      const totalForItem = quantity * price;
      setSum((state) => state + totalForItem)
    })

  }, [cartProducts, dispatch])
  return (
    <>
      <Head>
        <title>Store Cart</title>
      </Head>
      <div className='container-fluid '>
        <div className='row py-4 gy-3'>

          <div className={cartProducts.length > 0 ? `col-md-9` : "col-md-12"}>
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
                            <span><HiOutlinePlus onClick={() => dispatch(incrementByAmount({
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
                            }))} className='icon' /></span>
                            <span>{quantity}</span>
                            <span> <HiOutlineMinus onClick={() => dispatch(decrementByAmount({
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
                            }))} className='icon' /></span>
                          </div>
                          <span className='remove' onClick={() => dispatch(removeProduce({
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
                          }))}>
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
                {cartProducts.length > 0 ? <button onClick={() => dispatch(resetCart())} className='btn-reset btn btn-danger m-auto my-3'>Reset Cart</button> : ""}
                {cartProducts.length > 0 ? "" : <div className="text-center ">
                  <p className='fs-5'>your cart is empty !</p>
                  <Link href={"/"}>
                    <button className='btn-crad'>go to shopping !</button>
                  </Link>
                </div>}
              </div>
            </div>
          </div>
          {
            cartProducts.length > 0 ? <div className='col-md-3 '>
              <div className='bg-white container-crad p-3'>
                <div className='d-flex gap-3'>
                  <div><GiDandelionFlower className="icon-crad" /></div>
                  <p>
                    Your order qualifies for FREE Shipping by Choosing this option at
                    checkout. See details....
                  </p>
                </div>
                <span className="">
                  <p className='fw-bolder fs-5 d-flex gap-3' >Total: <FormaterPrice amount={sum}/></p>

                </span>
                <button

                  className="btn btn-info w-100 fw-bolder text-white"
                >
                  Proceed to Pay
                </button>

                <p className="mx-auto text-center text-danger">
                  Please login to continue
                </p>

              </div>
            </div> : ""
          }

        </div>

      </div> </>
  )
}

export default Crad