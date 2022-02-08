import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

import data from '../data/cocktail-data';

const MyProvider = (props) => {
  const [loginData, setLoginData] = useState({ userName: '', success: false });
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [error, setError] = useState({
    error: '',
  });

  const [cocktailData] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  const USERNAME = process.env.REACT_APP_USERNAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorageCartItems && setCartItems(localStorageCartItems);
  }, []);

  useEffect(() => {
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormData({ userName: '', password: '' });

    USERNAME === formData.userName && PASSWORD === formData.password
      ? setLoginData({ username: USERNAME, success: true })
      : setError({ error: 'There is a problem with your credentials' });
  };

  const logoutHandler = () => {
    setError('');
    setLoginData({ username: '', success: false });
  };

  return (
    <MyContext.Provider
      value={{
        loginData,
        changeHandler,
        loginHandler,
        logoutHandler,
        formData,
        setFormData,
        error,
        cocktailData,
        cartItems,
        setCartItems,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
