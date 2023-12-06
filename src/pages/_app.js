import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/Header.css"
import { Provider } from 'react-redux'
import { store } from '../store/store'
// import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react"
export default function App({ Component,  pageProps: { session, ...pageProps } }) {
  return (

  <Provider store={store}>
  {/* <PersistGate persistor={persistor} loading={null}> */}
 
 <SessionProvider  session={session}>
  <div className='color' >
     <Layout>
       <Component {...pageProps} />
     </Layout>
   </div >
 </SessionProvider>
  
   {/* </PersistGate> */}
  </Provider>
  )
}
