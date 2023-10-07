import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../Home/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Registration = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleRegistration = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const image = form.get('image');
    const password = form.get('password');
    console.log(name, email, password, image);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h3 className="text-2xl font-serif font-semibold my-5">
          Please Complete your Registration
        </h3>
        <form
          onSubmit={handleRegistration}
          className="w-1/3 mx-auto bg-stone-500 px-5 py-7 rounded-lg "
        >
          <label className="label">
            <span className="text-white font-semibold text-xl">User Name</span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="name"
            placeholder="Enter your name.."
            required
          />
          <label className="label">
            <span className="text-white font-semibold text-xl">User Email</span>
          </label>
          <input
            type="email"
            className="input block w-full outline-none border-0"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <label className="label">
            <span className="text-white font-semibold text-xl">
              User Image URL
            </span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="image"
            placeholder="Enter your Image URL.."
            required
          />
          <label className="label">
            <span className="text-white font-semibold text-xl">
              User Password
            </span>
          </label>
          <input
            type="password"
            className="input block w-full outline-none border-0"
            name="password"
            placeholder="Enter your password.."
            required
          />

          <button className="btn w-full my-2">Registration</button>
        </form>
        <p className="py-4">
          Already have Account? Please{' '}
          <Link className="text-black underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
