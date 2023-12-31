import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from "../image/slider/sliderImg_1.jpg";
import sliderImg_2 from "../image/slider/sliderImg_2.jpg";
import sliderImg_3 from "../image/slider/sliderImg_3.jpg";
import Image from 'next/image';
const Banner = () => {
  return (
    <div>
        <Carousel     
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        swipeable={true} 
       
        className='iggg '>
        <div>
          <Image priority  src={sliderImg_1} width="auto" height="auto" className='w-100 img-carousel' alt="find gift for dad image" />
        </div>
        <div>
          <Image src={sliderImg_2} width="auto" height="auto" className='w-100 img-carousel' alt="ship products over world image" />
        </div>
        <div>
          <Image src={sliderImg_3} width="auto" height="auto" className='w-100 img-carousel' alt="beauty products image" />
        </div>
              
            </Carousel>
    </div>
  )
}

export default Banner