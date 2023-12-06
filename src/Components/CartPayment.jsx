import React, { useEffect, useState } from 'react'
import { GiDandelionFlower } from "react-icons/gi";
import FormaterPrice from './FormaterPrice';
import { useDispatch, useSelector } from 'react-redux';
const CartPayment = () => {
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
    <div className='col-md-3 '>
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

      <p className="mx-auto text-center text-danger bouncing-element">
        Please login to continue
      </p>

    </div>
  </div>
  )
}

export default CartPayment