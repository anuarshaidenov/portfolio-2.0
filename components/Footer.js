import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container max-w-6xl w-11/12 pt-10 pb-16">
      <ul className="flex items-center justify-between sm:justify-start sm:gap-8">
        <li>
          <Link href="https://linkedin.com/in/anuarshaidenov">
            <a
              target="_blank"
              className="font-secondary hover:text-secondary hover:opacity-60 transition-all duration-300 ease-in-out"
            >
              linkedin.
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/anuarshaidenov">
            <a
              target="_blank"
              className="font-secondary hover:text-secondary hover:opacity-60 transition-all duration-300 ease-in-out"
            >
              github.
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/anuarnyi">
            <a
              target="_blank"
              className="font-secondary hover:text-secondary hover:opacity-60 transition-all duration-300 ease-in-out"
            >
              twitter.
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/044anuar/">
            <a
              target="_blank"
              className="font-secondary hover:text-secondary hover:opacity-60 transition-all duration-300 ease-in-out"
            >
              instagram.
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
