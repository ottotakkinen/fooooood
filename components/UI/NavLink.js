import React from 'react';
import Link from 'next/link';

const NavLink = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <a className="relative after:content-[''] after:absolute after:mt-2 after:w-full after:h-0.5 after:bg-black after:left-0 after:bottom-0 after:scale-0 hover:after:scale-100 after:transition-transform font-bold text-lg cursor-pointer">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
