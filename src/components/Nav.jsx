import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Logo from './Logo';

const Nav = () => {
  const context = useContext(MyContext);
  const { loginData, setLoginData, cartItems } = context;

  useEffect(() => {
    setLoginData({ ...loginData, success: false });
  }, [loginData, setLoginData]);

  return (
    <header>
      <Logo />
      <h3>Welcome {loginData.username}</h3>
      <ul>
        <NavLink
          to='/'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>Logout</li>
        </NavLink>

        <NavLink
          to='/products'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>Products</li>
        </NavLink>

        <NavLink
          to='/cart'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li>
            Cart <span>{cartItems.length}</span>
          </li>
        </NavLink>

        <NavLink
          to='/checkout'
          style={({ isActive }) => {
            return { color: isActive && 'green' };
          }}>
          <li> Checkout </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Nav;
