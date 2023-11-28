import React, { Children } from 'react'
import Header from './Header/Header'
import HeaderBottom from './Header/HeaderBottom'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <HeaderBottom/>
    {children}
    <Footer />
    </>
  )
}

export default Layout