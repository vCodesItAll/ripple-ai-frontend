import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // need to make mobile friendly
    // when navbar shrinks:
    //  ripple logo needs to shrink slightly and take up top half
    //  links need to shrink more and go under logo with space between links
    // everything needs to center align

    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/dashboard" className="text-white text-5xl font-bold">
          RIPPLE.ai
        </NavLink>

        {/* Navigation Links */}
        <div className="space-x-8">
          <NavLink to="/stories" className="text-white hover:text-gray-300">
            Stories
          </NavLink>
          <NavLink to="/submissions" className="text-white hover:text-gray-300">
            Submissions
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-gray-300">
            Contact
          </NavLink>
          <NavLink to="/login" className="text-white hover:text-gray-300">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
