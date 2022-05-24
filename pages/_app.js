import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { DefaultSeo, NextSeo } from 'next-seo';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <DefaultSeo
        title="anuar shaidenov"
        defaultTitle="anuar shaidenov"
        description="A front-end developer, passionate about UI and UX. I can help you boost your business and yurn your ideas to reality."
        canonical="https://www.anuarshaidenov.com/"
        openGraph={{
          url: 'https://www.anuarshaidenov.com/',
          title: 'Anuar Shaidenov',
          description:
            'A front-end developer, passionate about UI and UX. I can help you boost your business and yurn your ideas to reality.',
          images: [
            {
              url: 'https://i.ibb.co/193w4kV/anuar-shaidenov-s-portfolio-home.png',
              width: 800,
              height: 420,
              alt: 'Anuar Shaidenov',
            },
          ],
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
