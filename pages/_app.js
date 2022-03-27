import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F73E59" startPosition={0.9} height={2} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
