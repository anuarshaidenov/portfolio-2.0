import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';

const Header = () => {
  const router = useRouter();

  return (
    <header className="container py-6 max-w-6xl w-11/12 flex justify-between items-center md:fixed md:left-1/2 md:top-0 md:-translate-x-1/2 md:z-10">
      <div className="font-light text-4xl">
        <Link href="/">
          <a className="font-secondary font-thin">anuár</a>
        </Link>
      </div>
      <MobileMenu />
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about">
              <a
                className={`hover:text-secondary hover:opacity-60 transition-all duration-200 ${
                  router.pathname == '/about' ? 'text-secondary opacity-80' : ''
                }`}
              >
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`hover:text-secondary hover:opacity-60 transition-all duration-200 ${
                  router.pathname == '/contact'
                    ? 'text-secondary opacity-80'
                    : ''
                }`}
              >
                contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className={`hover:text-secondary hover:opacity-60 transition-all duration-200 ${
                  router.pathname == '/blog' ? 'text-secondary opacity-80' : ''
                }`}
              >
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
