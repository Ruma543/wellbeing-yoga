import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
const SocialMedia = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error);
        return;
      });
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="flex justify-center items-center my-3  "
    >
      <span className="text-2xl">
        <FcGoogle></FcGoogle>
      </span>
      <span className="text-xl text-black ">Sign In</span>
    </div>
  );
};

export default SocialMedia;
