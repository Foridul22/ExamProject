import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-400 text-black">
      <div className="mx-auto max-w-7xl">
        <div className="  flex justify-between items-center px-8 py-3">
          <div>
            <Link to="/" className="  font-serif text-2xl font-bold">
              Logo
            </Link>
          </div>
          <div className=" flex items-center gap-10">
            <Link to="/" className=" font-serif text-xl font-semibold">
              Home
            </Link>
            <Link to="/notes" className=" font-serif text-xl font-semibold">
              Notes
            </Link>
            <Link to="/contact" className=" font-serif text-xl font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
