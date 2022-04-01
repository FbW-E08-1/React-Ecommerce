import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Auth = () => {
  const { loginData } = useContext(MyContext);

  return loginData.success ? <Outlet /> : <Navigate to='/' />;
};

export default Auth;
