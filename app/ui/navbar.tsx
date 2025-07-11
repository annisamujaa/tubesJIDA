// Navbar.js
import React from 'react';
import NavLink from '@/app/ui/navLink';

export default function Navbar() {
  return(
  <nav className="flex items-center justify-between px-4 py-3 bg-white">
    <div className="font-bold text-lg text-blue-800">
        <h1 className='text-2xl'>MyApp</h1>
    </div>
    <NavLink />
  </nav>
  );
}
