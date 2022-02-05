import React from 'react';
import Link from 'next/link';
import Button from './UI/Button';

const NavBar = () => {
  return (
    <header className="w-full max-w-2xl flex flex-row items-center py-4 px-8 sticky bg-zinc-100">
      <h1 className="text-4xl font-extrabold font-heading col-span-4 p-4">
        Fooooood
      </h1>
      <nav className="ml-auto flex flex-row">
        <Link href="/" passHref>
          Home
        </Link>

        <Link href="/login" passHref>
          Login
        </Link>

        <Link href="/signup" passHref>
          Sign&nbsp;up
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
