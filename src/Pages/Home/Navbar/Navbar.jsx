import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        swal('Good Job!', 'User Logout successfully!', 'success');
        return;
      })
      .catch(error => {
        swal('Sorry!', 'something went wrong!', 'error');
        return;
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? 'text-pink-700' : isPending ? 'pending' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive ? 'text-pink-700' : isPending ? 'pending' : ''
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive ? 'text-pink-700' : isPending ? 'pending' : ''
          }
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive ? 'text-pink-700' : isPending ? 'pending' : ''
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive, isPending }) =>
                isActive ? 'text-pink-700' : isPending ? 'pending' : ''
              }
            >
              Events
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-stone-300 z-50 relative w-full lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl lg:text-2xl">
          Wellbeing Yoga
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" px-1 flex gap-4">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div className="flex items-center">
              <p className=" mr-5">{user.displayName}</p>

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleSignOut} className="px-4 py-2">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn mr-5">login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
