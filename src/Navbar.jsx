import React from "react";
import logo from "./assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo} // replace with your actual logo path
          alt="Logo"
          className="h-12 w-12"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-16 text-gray-700 text-sm font-medium">
        <li><a href="#vision" className="hover:text-blue-600">Vision</a></li>
        <li><a href="#market" className="hover:text-blue-600">Market</a></li>
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#technology" className="hover:text-blue-600">Technology</a></li>
        <li><a href="#business" className="hover:text-blue-600">Business</a></li>
        <li><a href="#growth" className="hover:text-blue-600">Growth</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
