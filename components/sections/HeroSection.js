import BgBubbles from '../BgBubbles';
import PrimaryButton from '../PrimaryButton';

const HeroSection = () => {
  return (
    <section className="container max-w-6xl w-11/12 py-20 lg:pt-28">
      <BgBubbles
        className="absolute overflow-visible left-0 top-[-100px] md:top-0 z-[-1]"
        width="100%"
        height="842"
      />
      <h1 className="font-bold text-6xl lg:text-7xl xl:text-8xl md:mb-4 text-center md:text-left">
        hey there, i&apos;m anuar
      </h1>
      <h2 className="font-bold text-6xl text-secondary lg:text-7xl xl:text-8xl mb-4 md:mb-5 text-center md:text-left">
        i help agencies, startups and brands.
      </h2>
      <p className="text-center text-lg md:text-left max-w-xl mx-auto md:mx-0 mb-5">
        i develop compelling designs for businesses using the most sophisticated
        technologies available today for fully interactive and responsive
        websites and apps.
      </p>
      <PrimaryButton className="block mx-auto md:inline-block">
        let&apos;s talk
      </PrimaryButton>
    </section>
  );
};

export default HeroSection;
