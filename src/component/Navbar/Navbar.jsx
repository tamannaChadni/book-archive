import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/listed-book"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/page-to-read"
          >
            Pages to Read
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/quotes"
          >
            Quote
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/review"
          >
            Review
          </NavLink>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-3xl font-bold">Book Archive</a> */}
        <a className="btn btn-ghost text-3xl font-boldtext-2xl font-bold bg-gradient-to-r from-lime-500 via-yellow-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          Book Archive
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/listed-book"
          >
            Listed Books
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/page-to-read"
          >
            Pages to Read
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/quotes"
          >
            Quote
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-lime-500 font-bold" : "font-normal"
            }
            to="/review"
          >
            Review
          </NavLink>
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
