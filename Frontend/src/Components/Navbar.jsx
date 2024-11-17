import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ loggedin, setloggedin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setloggedin(false);
    navigate('/'); // Redirect to home after logout
  };

  return (
    <div className='w-1/2 justify-between mx-auto flex py-8'>
      <Link to="/" className='font-bold'>HUMBLE.</Link>
      <Link to="/" className=''>Projects</Link>

      {loggedin && (
        <>
          <Link to="/create" className=''>Create</Link>
          <Link to="/profile" className=''>Profile</Link>
        </>
      )}

      {!loggedin ? (
        <Link to="/login" className=''>Login</Link>
      ) : (
        <button onClick={handleLogout} className='text-red-500'>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
