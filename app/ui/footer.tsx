import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} Pizza2. All rights reserved.</span>
        <div className="flex space-x-4 ">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
