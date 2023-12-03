import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import FormaterPrice from './FormaterPrice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,addToFavourit } from '@/store/nextSlice';
const Produces = ({ Produces }) => {
    const {cartProducts ,favoriteProducts} = useSelector((state) => state.items)
  
    const dispatch = useDispatch();
    return (
        <>
            {Produces.map(({
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
                <div className='col-lg-3 col-md-4 col-sm-6  gy-3 produces-translate' key={_id}>
                    <div className='bg-white p-2 position-relative' style={{ borderRadius: "10px" }}>
                        {isNew && (
                            <div className=" discount d-flex">
                                !save <FormaterPrice amount={oldPrice - price} />
                                </div>
                        )}
                        <div className='img-hover ' style={{ overflow: "hidden", borderBottom: "1px solid  rgba(0, 0, 0, 0.107)" }}>
                            <Image
                                src={image}
                                className='image'
                                style={{ borderRadius: "10px 10px 0 0" }}
                                width={300}
                                height={300}
                                alt="find gift for dad image"
                            />
                        </div>

                        <div className='p-4'>
                            <h6 style={{ color: "rgba(0, 0, 0, 0.507)" }}>{category}</h6>
                            <h5>{title}</h5>
                            <div className='d-flex gap-2'>
                                <h6 className='fw-bold text-decoration-line-through' style={{ color: "rgba(0, 0, 0, 0.507)" }}><FormaterPrice amount={oldPrice} /></h6>
                                <h6 className='fw-bold'><FormaterPrice amount={price} /></h6>
                            </div>
                            <p className='fs-7'>{`${description}`.substring(0, 100)}</p>
                            <button 
                            className='btn btn-black w-100'
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

                        <div className="favouritCard ">
                            <span
                                className="fs-3 shopping"
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
                            >
                                <FaShoppingCart />
                            </span>
                            <span

                                className="fs-3"
                               
                            >
                                <FaHeart
                                    style={favoriteProducts.find((item)=> item._id === _id)?{color:"red"}:""}
                                    onClick={()=> dispatch(addToFavourit({
                                        _id,
                                        title,
                                        description,
                                        oldPrice,
                                        price,
                                        brand,
                                        image,
                                        isNew,
                                        category,
                                       
                                    }))
                                
                            }
                                />
                            </span>
                        </div>
                    </div>
                </div>))}

        </>

    )
}

export default Produces