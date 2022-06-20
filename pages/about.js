import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import profilePic from '../public/me.jpeg';
import { NextSeo } from 'next-seo';

const AboutPage = () => {
  useEffect(() => {
    const body = document.body;
    body.classList.add('body-gradient');
    return () => body.classList.remove('body-gradient');
  }, []);

  return (
    <>
      <NextSeo title="anuar shaidenov | about me." />

      <section className="container max-w-6xl w-11/12 py-20 md:pt-40">
        <h1 className="font-bold text-5xl mb-10 sm:text-7xl sm:mb-12 md:text-8xl md:mb-20 lg:text-9xl lg:mb-28">
          turning an idea into reality.
        </h1>
        <p className="text-xl max-w-5xl leading-8 lg:text-2xl lg:leading-9 lowercase mb-10">
          <div className="mb-4 sm:ml-10 border-4 -rotate-3 relative w-[200px] h-[300px] sm:float-right">
            <Image
              src={profilePic}
              alt="Picture of me"
              layout="fill"
              objectFit="cover"
            />
          </div>
          I&apos;m a graduate with a Bachelor&apos;s Degree in Computer
          Engineering and currently, I&apos;m enrolled in an online Bootcamp for
          Web Developers where we work on different projects every day with
          coding partners.
          <br />
          <br /> The past couple of months I spent working on projects mainly
          focusing on components, UI, and UX. Such methodologies as BEM help me
          maintain my code, keep it modular and clean while opening
          opportunities to expand my projects for future development. <br />
          <br />I love following the design fundamentals and I believe that user
          interface and user experience are some of the most important things
          about an application.
          <br />
          and speak 4 languages including english, kazakh, russian and turkish.
        </p>

        <h2 className="font-bold text-4xl mb-4">you hiring?</h2>

        <h3 className="text-2xl mb-2">some of my technical skills include:</h3>
        <ul className="list-disc list-inside font-secondary mb-4">
          <li>NextJS.</li>
          <li>React.</li>
          <li>Redux.</li>
          <li>Ruby on Rails.</li>
          <li>PostgreSQL.</li>
          <li>Sass.</li>
          <li>Tailwind CSS.</li>
        </ul>
        <Link
          href="https://docs.google.com/document/d/1aLm1ps9YnlqcZlE8ezQ5xUlxWXyfT0MRcqMW27hX_XY/edit?usp=sharing"
          passHref
        >
          <a target="_blank">
            <PrimaryButton>my resume</PrimaryButton>
          </a>
        </Link>
      </section>
    </>
  );
};

export default AboutPage;
