import React, { Children } from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header/HeaderBottom'


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <HeaderBottom/>
    {children}
   
    </>
  )
}

export default Layout