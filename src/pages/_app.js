import Layout from '@/Components/Layout'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/Header.css"
export default function App({ Component, pageProps }) {
  return (<>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}
