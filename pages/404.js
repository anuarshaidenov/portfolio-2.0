import Link from 'next/link';
import PrimaryButton from '../components/PrimaryButton';

export default function Custom404() {
  return (
    <section className="container max-w-6xl w-11/12 py-20 md:pt-40 min-h-screen">
      <h1 className="font-bold text-center text-5xl mb-10 sm:text-7xl sm:mb-12 md:text-8xl md:mb-20 lg:text-9xl lg:mb-28">
        404 - you lost or something?
      </h1>
      <div className="text-center">
        <Link href="/" passHref>
          <PrimaryButton>Back to the main</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
