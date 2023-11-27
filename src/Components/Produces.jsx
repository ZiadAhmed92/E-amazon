import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Produces = ({ Produces }) => {
    console.log(Produces)
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
                <div className='col-md-3 gy-3 produces-translate'>
                    <div className='bg-white p-2 position-relative' style={{ borderRadius: "10px" }}>
                        {isNew && (
                            <p className=" discount">
                                !save ${`${oldPrice - price}`.slice(0, 5)}
                            </p>
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
                                <h6 className='fw-bold text-decoration-line-through' style={{ color: "rgba(0, 0, 0, 0.507)" }}>${oldPrice}</h6>
                                <h6 className='fw-bold'>${price}</h6>
                            </div>
                            <p className='fs-7'>{`${description}`.substring(0, 120)}</p>
                            <button className='btn btn-black w-100'>Add To Card</button>
                        </div>
                        
                        <div className="favouritCard ">
                            <span
                                className="fs-3 shopping"
                            >
                                <FaShoppingCart />
                            </span>
                            <span

                                className="fs-3"
                            >
                                <FaHeart

                                />
                            </span>
                        </div>
                    </div>
                </div>))}

        </>

    )
}

export default Produces