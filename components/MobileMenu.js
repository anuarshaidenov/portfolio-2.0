import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState('top-8');
  const router = useRouter();

  useEffect(() => {
    if (showMenu) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [showMenu]);

  const stickNavbar = () => {
    window?.scrollY > 100
      ? setStickyClass(
          'bg-secondary p-3 rounded-lg top-[85vh] shadow-xl z-10 text-white'
        )
      : setStickyClass('top-8');
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <button
        type="button"
        onClick={handleShowMenu}
        className={`md:hidden transition-all duration-500 fixed right-5 ${stickyClass}`}
      >
        menu
      </button>

      <div
        className={`fixed w-full h-screen left-0 top-0 z-10 ${
          showMenu ? '' : 'hidden'
        } md:hidden  opacity-10 bg-secondary`}
        onClick={handleShowMenu}
      ></div>

      <div
        className={`${
          showMenu ? '' : 'translate-x-[150%]'
        } transition-transform duration-300 ease-in md:hidden fixed top-0 right-0 z-20 h-screen w-4/5 bg-white flex flex-col justify-start items-center`}
      >
        <button
          type="button"
          onClick={handleShowMenu}
          className="self-end mt-5 mr-5"
        >
          close
        </button>
        <ul className="mt-32">
          <li className="mb-4">
            <Link href="/">
              <a
                onClick={handleShowMenu}
                className={`font-medium text-3xl ${
                  router.pathname == '/' ? 'text-secondary opacity-80' : ''
                }`}
              >
                home
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about">
              <a
                onClick={handleShowMenu}
                className={`font-medium text-3xl ${
                  router.pathname == '/about' ? 'text-secondary opacity-80' : ''
                }`}
              >
                about
              </a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contact">
              <a
                onClick={handleShowMenu}
                className={`font-medium text-3xl ${
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
                onClick={handleShowMenu}
                className={`font-medium text-3xl ${
                  router.pathname == '/blog' ? 'text-secondary opacity-80' : ''
                }`}
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
