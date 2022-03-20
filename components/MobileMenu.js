import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onHamburgerMenuClick = () => setShowMenu(!showMenu);

  return (
    <>
      <button
        type="button"
        onClick={onHamburgerMenuClick}
        className="md:hidden"
      >
        menu
      </button>

      <div
        className={`fixed w-full h-screen left-0 top-0 z-10 ${
          showMenu ? '' : 'hidden'
        } md:hidden  opacity-10 bg-secondary`}
        onClick={onHamburgerMenuClick}
      ></div>

      <div
        className={`${
          showMenu ? '' : 'translate-x-[150%]'
        } transition-transform duration-300 ease-in md:hidden fixed top-0 right-0 z-20 h-screen w-4/5 bg-white flex flex-col justify-start items-center`}
      >
        <button
          type="button"
          onClick={onHamburgerMenuClick}
          className="self-end mt-5 mr-5"
        >
          close
        </button>
        <ul className="mt-32">
          <li className="mb-4">
            <Link href="/">
              <a className="font-medium text-3xl">about</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/">
              <a className="font-medium text-3xl">contact</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="font-medium text-3xl">blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
