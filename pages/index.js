import Head from 'next/head';
import MeIllustration from '../components/MeIllustration';
import PrimaryButton from '../components/PrimaryButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <section className="container max-w-6xl w-11/12 py-20 md:pt-40 md:pb-60 text-center md:text-left md:flex md:flex-row-reverse md:justify-center md:items-center">
        <MeIllustration
          width="229"
          height="262"
          className="mx-auto mb-10 md:hidden"
        />
        <MeIllustration
          width="289"
          height="331"
          className="mx-auto mb-10 hidden md:block"
        />
        <div className="lg:max-w-3xl md:max-w-lg">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-1">
            hey there i&apos;m anuar.
          </h1>
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl text-secondary mb-4 md:mb-6">
            i help agencies, startups and brands.
          </h2>
          <p className="max-w-xl mb-5 md:mb-6">
            i develop compelling designs for small businesses using the most
            sophisticated technologies available today for fully interactive and
            responsive websites and apps.
          </p>
          <PrimaryButton type="button">let&apos;s talk</PrimaryButton>
        </div>
      </section>
    </>
  );
}
