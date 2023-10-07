import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../Home/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Registration = () => {
  const navigate = useNavigate();
  const { user, createUser, profileUpdate } = useContext(AuthContext);

  console.log(user);
  const handleRegistration = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const image = form.get('image');
    const password = form.get('password');
    console.log(name, email, password, image);
    if (password.length < 6) {
      swal('Sorry!', 'Password must have 6 character!', 'error');
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal('Sorry!', 'Password should have atleast one upercase!', 'error');
      return;
    } else if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      swal(
        'Sorry!',
        'Password should have atleast one  special character!',
        'error'
      );
      return;
    }
    createUser(email, password)
      .then(result => {
        profileUpdate(name, image)
          .then(() => {
            swal('Good Job !', 'User Update succfully!', 'success');
            navigate('/');
          })
          .catch(error => {
            swal('Sorry!', 'User information is missing!', 'error');
          });
      })
      .then(error => console.log(error));
  };

  return (
    <div>
      <div>
        <h3 className="text-2xl font-serif font-semibold mt-10 mb-3">
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
