import React from 'react'
import { LuMenu } from "react-icons/lu";
const HeaderBottom = () => {
  return (
    <div className='header-bottom d-flex align-items-center gap-3 px-3 text-white p-2'>
      <div className=" All d-flex align-items-center gap-1 ">
        <div><LuMenu  /></div>
        <div>All</div>
      </div>
      <div className="outline">
        Todays Deals
      </div>
      <div className="outline">
        Customer Service
      </div>
      <div className="outline">
        Registry
      </div>
      <div className="outline">
        Gift Cards
      </div>
      <div className="outline">
        Sell
      </div>
    </div>
  )
}

export default HeaderBottom