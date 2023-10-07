import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Registration = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div></div>;
};

export default Registration;
