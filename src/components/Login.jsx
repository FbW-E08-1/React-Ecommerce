import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import Logo from './Logo';

const Login = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const { loginData, setLoginData, formData, setFormData, error, setError } =
    context;

  const userNameRef = useRef();

  const USERNAME = process.env.REACT_APP_USERNAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setError('');
    setFormData({ userName: '', password: '' });

    USERNAME === formData.userName && PASSWORD === formData.password
      ? setLoginData({ username: USERNAME, success: true })
      : setError({ error: 'There is a problem with your credentials' });
  };

  return (
    <main>
      <Logo />
      <section className='login-page'>
        <h2>
          Please enter your login details
          <form>
            <input
              type='text'
              ref={userNameRef}
              name='userName'
              placeholder='Enter your name'
              value={formData.userName}
              onChange={changeHandler}
            />
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={changeHandler}
            />
            <button onClick={loginHandler}>Login</button>
          </form>
        </h2>
        {loginData.success ? (
          navigate('./products', { replace: true })
        ) : (
          <aside className='aside-errors'>
            <p>{error.error}</p>
          </aside>
        )}
      </section>
    </main>
  );
};

export default Login;
