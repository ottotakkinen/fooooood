import React from 'react';
import NavLink from './UI/NavLink';
import { useAuth } from '../providers/auth';
import { useState } from 'react';

const NavBar = () => {
  const { currentUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((p) => !p);

  return (
    <header className="w-full max-w-6xl flex flex-row items-center py-4 px-8 sticky bg-zinc-100">
      <nav
        className={`w-full items-center flex flex-row justify-between ${
          menuOpen ? 'flex flex-col z-20 align-center w-full' : ''
        }`}
      >
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-4xl font-extrabold font-heading col-span-4 p-4">
            Fooooood
          </h1>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={() => toggleMenu()}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:flex flex-row gap-4 ${
            menuOpen ? 'flex flex-col align-start w-full' : 'hidden'
          }`}
        >
          <NavLink href="/">Home</NavLink>
          {!currentUser && <NavLink href="/login">Login</NavLink>}
          {!currentUser && <NavLink href="/signup">Sign&nbsp;up</NavLink>}
          {currentUser && <NavLink href="/logout">Logout</NavLink>}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
