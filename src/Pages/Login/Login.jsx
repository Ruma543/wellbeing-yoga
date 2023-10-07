import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';

const Login = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <Link to="/registration">
        <button>register</button>
      </Link>
    </div>
  );
};

export default Login;
