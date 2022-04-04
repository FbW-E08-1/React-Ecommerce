import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Logo from './Logo';

const Nav = () => {
  const context = useContext(MyContext);
  const { loginData, cartItems, logoutHandler } = context;

  //All NavLinks are turned to green and have the link set to un-clickable when active

  return (
    <header>
      <Logo />
      <h3>
        Welcome {loginData.username} to <span>Sally's</span> Cocktail Bar
      </h3>
      <ul>
        <NavLink
          onClick={logoutHandler}
          to='/'
          style={({ isActive }) => ({
            color: isActive && 'green',
            pointerEvents: isActive && 'none',
          })}>
          <li>Logout</li>
        </NavLink>

        <NavLink
          to='/products'
          style={({ isActive }) => ({
            color: isActive && 'green',
            pointerEvents: isActive && 'none',
          })}>
          <li>Products</li>
        </NavLink>

        <NavLink
          to='/cart'
          style={({ isActive }) => ({
            color: isActive && 'green',
            pointerEvents: isActive && 'none',
          })}>
          <li>
            Cart <span>{cartItems.length}</span>
          </li>
        </NavLink>

        <NavLink
          to='/checkout'
          style={({ isActive }) => ({
            color: isActive && 'green',
            pointerEvents: isActive && 'none',
          })}>
          <li> Checkout </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Nav;
