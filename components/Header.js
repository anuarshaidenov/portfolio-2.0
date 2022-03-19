import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="container py-6 max-w-6xl w-11/12 flex justify-between items-center">
      <div className="font-light text-4xl">
        <Link href="/">anuár</Link>
      </div>
      <MobileMenu />
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
