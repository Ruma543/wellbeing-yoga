import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const Login = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get('email');

    const password = form.get('password');
    console.log(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h3 className="text-2xl font-serif font-semibold my-5">
          Please Login For Booking
        </h3>
        <form
          onSubmit={handleLogin}
          className="w-1/3 mx-auto bg-stone-500 px-5 py-7 rounded-lg "
        >
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
          <label className="label">
            <a href=""> Forget Password?</a>
          </label>
          <button className="btn w-full">Login</button>
        </form>
        <p className="py-4">
          New for Website? Please{' '}
          <Link className="text-black underline" to="/registration">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
