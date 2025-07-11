'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hal/about', label: 'About' },
  { href: '/hal/contact', label: 'Contact' },
  { href: '/hal/profile', label: 'Profile' },
];

export default function NavLink() {
  const pathname = usePathname();

  return (
    <ul className="flex justify-end text-black">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`transition-colors px-2 ${
              pathname === link.href
                ? 'underline underline-offset-4 font-bold text-blue-600'
                : 'hover:text-blue-500'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}