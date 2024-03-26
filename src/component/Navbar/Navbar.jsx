import React from "react";

const Navbar = () => {
  return (
    <div className="container navbar bg-base-100 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
            <li>
              <a>Quote</a>
            </li>
            <li>
              <a>Review</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">Book Archive</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Listed Books</a>
          </li>
          <li>
            <a>Pages to Read</a>
          </li>
          <li>
            <a>Quote</a>
          </li>
          <li>
            <a>Review</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn bg-lime-500 text-white">Sign In</a>
        <a className="btn bg-yellow-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
