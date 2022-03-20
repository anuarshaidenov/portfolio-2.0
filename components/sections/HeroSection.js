import HeroBg from '../HeroBg';
import PrimaryButton from '../PrimaryButton';

const HeroSection = () => {
  return (
    <section className="container max-w-6xl w-11/12 py-20 lg:pt-28">
      <HeroBg
        width="100%"
        height="702"
        className="absolute top-[-100px] max-w-[1000px] left-0 sm:w-3/4 sm:left-1/2 sm:translate-x-[-50%] md:top-1/2 md:translate-y-[-60%] lg:top-[30rem] z-[-1]"
      />
      <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl md:mb-4 text-center">
        hey there, i&apos;m anuar
      </h1>
      <h2 className="font-bold text-5xl text-secondary lg:text-6xl xl:text-7xl mb-4 md:mb-5 text-center">
        i help agencies, startups and brands.
      </h2>
      <p className="text-center max-w-md mx-auto mb-5">
        i develop compelling designs for small businesses using the most
        sophisticated technologies available today for fully interactive and
        responsive websites and apps.
      </p>
      <PrimaryButton className="block mx-auto">let&apos;s talk</PrimaryButton>
    </section>
  );
};

export default HeroSection;
