import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/Header.css"
import { Provider } from 'react-redux'
import { persistor, store } from '../store/store'
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  return (<>

  <Provider store={store}>
  <PersistGate persistor={persistor} loading={null}>
  <div className='color' >
     <Layout>
       <Component {...pageProps} />
     </Layout>
   </div >
   </PersistGate>
  </Provider>
  </>)
}
