'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hal/menu', label: 'Menu' },
  { href: '/hal/order', label: 'Order' },
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
                ? 'underline underline-offset-4 font-bold text-red-600'
                : 'hover:text-red-500'
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}