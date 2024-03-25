import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="p-2">
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-400 hover:bg-red-600"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:ml-4 p-2">
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-400 hover:bg-red-600"
              : isPending
              ? "pending"
              : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li className="lg:ml-4 p-2">
        <NavLink
          to=""
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-green-400 hover:bg-red-600"
              : isPending
              ? "pending"
              : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className=" ml-4 mr-4">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabindex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl lg:text-2xl font-bold">
              Book <span className="">Vibe</span>
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-4">
          <button className="btn p-3 bg-green-400">Sign in</button>
              <button className="btn p-3 bg-sky-400">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
