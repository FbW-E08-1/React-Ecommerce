import React, { useState, useReducer, useEffect } from 'react';
import MyContext from './MyContext';

//Cocktail data
import data from '../data/cocktail-data';

//Actions
import { ACTIONS } from '../actions/actions';

//Reducers
import { loginDataReducer } from '../reducers/loginDataReducer';
import { formDataReducer } from '../reducers/formDataReducer';
import { errorReducer } from '../reducers/errorReducer';
import { cartItemsReducer } from '../reducers/cartItemsReducer';

const MyProvider = ({ children }) => {
  //As there will be no update of the initial base data we can store it in state using a useState hook.
  const [cocktailData] = useState(data);

  //Reducer initializations
  const loginDataInit = { userName: '', success: false };
  const formDataInit = { userName: '', password: '' };
  const errorInit = { error: '' };

  //useReducers

  //Login data
  const [loginData, loginDataDispatch] = useReducer(
    loginDataReducer,
    loginDataInit
  );

  //Form data
  const [formData, formDataDispatch] = useReducer(
    formDataReducer,
    formDataInit
  );

  //User errors
  const [error, errorDispatch] = useReducer(errorReducer, errorInit);

  //Cart data
  const [cartItems, cartItemsDispatch] = useReducer(cartItemsReducer, []);

  //Environment variables
  const USERNAME = process.env.REACT_APP_USERNAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  //Get localStorage
  useEffect(() => {
    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems'));
    localStorageCartItems &&
      cartItemsDispatch({ type: ACTIONS.SET, payload: localStorageCartItems });
  }, []);

  //SetLocalStorage
  useEffect(() => {
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  //Form ChangeHandler
  const changeHandler = (e) => {
    formDataDispatch({
      type: ACTIONS.GET,
      payload: { ...formData, [e.target.name]: e.target.value },
    });
  };

  //Login Handler
  const loginHandler = (e) => {
    e.preventDefault();
    formDataDispatch({
      type: ACTIONS.RESET,
      payload: { userName: '', password: '' },
    });

    USERNAME === formData.userName && PASSWORD === formData.password
      ? loginDataDispatch({
          type: ACTIONS.CHANGE,
          payload: { username: USERNAME, success: true },
        })
      : errorDispatch({
          type: ACTIONS.CHANGE,
          payload: { error: 'There is a problem with your credentials' },
        });
  };

  //Logout Handler
  const logoutHandler = () => {
    errorDispatch({ type: ACTIONS.RESET, payload: '' });
    loginDataDispatch({
      type: ACTIONS.RESET,
      payload: { username: '', success: false },
    });
  };

  //Add all state, data and functionality to the context(Store)
  return (
    <MyContext.Provider
      value={{
        loginData,
        changeHandler,
        loginHandler,
        logoutHandler,
        formData,
        error,
        cocktailData,
        cartItems,
        cartItemsDispatch,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
