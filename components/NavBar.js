import React from 'react';
import NavLink from './UI/NavLink';
import { useAuth } from '../providers/auth';

const NavBar = () => {
  const { currentUser } = useAuth();

  return (
    <header className="w-full max-w-2xl flex flex-row items-center py-4 px-8 sticky bg-zinc-100">
      <h1 className="text-4xl font-extrabold font-heading col-span-4 p-4">
        Fooooood
      </h1>
      <nav className="ml-auto flex flex-row gap-4">
        <NavLink href="/">Home</NavLink>
        {!currentUser && <NavLink href="/login">Login</NavLink>}
        {!currentUser && <NavLink href="/signup">Sign&nbsp;up</NavLink>}
        {currentUser && <NavLink href="/logout">Logout</NavLink>}
      </nav>
      <button></button>
    </header>
  );
};

export default NavBar;
