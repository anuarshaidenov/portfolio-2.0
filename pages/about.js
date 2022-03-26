import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    const body = document.body;
    body.classList.add('body-gradient');
    return () => body.classList.remove('body-gradient');
  }, []);

  return (
    <section className="container max-w-6xl w-11/12 py-20 md:pt-28">
      <h1 className="font-bold text-5xl mb-8 sm:text-7xl sm:mb-10 md:text-8xl md:mb-12 lg:text-9xl lg:mb-16">
        i love turning an idea into reality.
      </h1>
      <p className="max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9 lowercase">
        I&apos;m a graduate with a Bachelor&apos;s Degree in Computer
        Engineering and currently, I&apos;m enrolled in an online Bootcamp for
        Web Developers where we work on different projects every day with coding
        partners.
      </p>
      <p className="max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9 lowercase">
        The past couple of months I spent working on projects mainly focusing on
        components, UI, and UX. Such methodologies as BEM help me maintain my
        code, keep it modular and clean while opening opportunities to expand my
        projects for future development. I also love following the design
        fundamentals since I believe that user interface and user experience are
        some of the most important things about an application.
      </p>
      <p className="max-w-4xl text-xl leading-8 lg:text-2xl lg:leading-9 lowercase">
        and speak 4 languages including english, kazakh, russian and turkish.
      </p>
    </section>
  );
};

export default AboutPage;
