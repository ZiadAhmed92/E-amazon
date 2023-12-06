import FormaterPrice from '@/Components/FormaterPrice'
import { addToCart, resetFavourit } from '@/store/nextSlice'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'

const Favourit = () => {
  const {cartProducts ,favoriteProducts} = useSelector((state) => state.items)
  const dispatch = useDispatch();
  return (
    <>
     
      <Head>
        <title> Favourit Produces</title>
      </Head>
      <div className='container-fluid '>
        <div className='row py-4 gy-3'>

          <div className='col-md-12 '>
            <div className='container-fluid bg-white container-crad'>
              <div className='row  p-2 '>
                <div className='col-md-12  d-flex align-items-center justify-content-between'>
                  <h3 className='fw-bold'>Favorite Items</h3>
                  <h4 className='fw-bold'>Action</h4>
                </div>
                <hr />
                {favoriteProducts.map(({
                  _id,
                  title,
                  description,
                  oldPrice,
                  price,
                  brand,
                  image,
                  isNew,
                  category,
                 
                }) => (
                  <div className='col-md-12 py-3 favourit-center' key={_id}>
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
                        <p className='d-flex '>unit price : <span className='fw-bold'><FormaterPrice amount={price} /></span></p>
                        
                          
                        
                          <button 
                            className='btn btn-black px-5'
                            onClick={()=> dispatch(addToCart({
                                _id,
                                title,
                                description,
                                oldPrice,
                                price,
                                brand,
                                image,
                                isNew,
                                category,
                                quantity: 1,
                            }))}
                            >Add To Card</button>
                         

                       
                      </div>
                     

                    </div>
                  </div>
                ))}
              <div className='text-center'> {favoriteProducts.length > 0 ? <button onClick={() => dispatch(resetFavourit())} className='btn btn-danger px-5  m-auto my-3'>Reset Favourit</button> : ""}</div>  
              {favoriteProducts.length > 0 ? "" : <div className="text-center ">
                  <p className='fs-5'>No favorite items you added !</p>
                  <Link href={"/"}>
                    <button className='btn-crad'> return to products list</button>
                  </Link>
                </div>}
              </div>
            </div>
          </div>

       
        </div>

      </div> 
    </>
  )
}

export default Favourit