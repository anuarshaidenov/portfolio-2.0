import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { DefaultSeo, NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="anuar shaidenov"
        defaultTitle="anuar shaidenov"
        description="A front-end developer, passionate about UI and UX. I could help you boost your business and yurn your ideas to reality."
        openGraph={{
          title: 'Anuar Shaidenov',
          description:
            'A front-end developer, passionate about UI and UX. I could help you boost your business and yurn your ideas to reality.',
          image: 'https://avatars.githubusercontent.com/u/45717589?v=4',
          width: 800,
          height: 420,
          alt: 'Anuar Shaidenov',
        }}
        twitter={{
          handle: '@anuarnyi',
          cardType: 'summary_large_image',
          site: '@anuarnyi',
        }}
      />
      <NextNProgress color="#F73E59" startPosition={0.9} height={2} />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
