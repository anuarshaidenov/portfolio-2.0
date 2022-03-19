import Link from 'next/link';

const Header = () => {
  return (
    <header className="container py-6 max-w-6xl w-11/12 flex justify-between items-center">
      <div className="font-light text-4xl">
        <Link href="/">anuár</Link>
      </div>
      <svg
        width="25"
        height="19"
        viewBox="0 0 57 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden"
      >
        <rect width="57" height="8" rx="4" fill="black" />
        <rect y="14" width="57" height="8" rx="4" fill="black" />
        <rect y="28" width="57" height="8" rx="4" fill="black" />
      </svg>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">
              <a className="hover:text-secondary hover:opacity-60 transition-all duration-200">
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-secondary hover:opacity-60 transition-all duration-200">
                contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="hover:text-secondary hover:opacity-60 transition-all duration-200">
                blog
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
