import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  return (
    <>
      <NavLink to='/home' exact>
        <span className='mx-2'>Home</span>
      </NavLink>
      <NavLink to='/about/Hello' exact>
        <span className='mx-2'>About</span>
      </NavLink>
      <NavLink to='/contact' exact>
        <span className='mx-2'>Contact</span>
      </NavLink>
      <NavLink to='/login' exact>
        <span className='mx-2'>Login</span>
      </NavLink>
    </>
  );
};

export default Navbar;
