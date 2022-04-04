import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

const Auth = () => {
  const { loginData } = useContext(MyContext);

  //If the user has logged in successfully then all our routes under the parent of Auth will get rendered inside our outlet.
  //Otherwise we redirect them back to the login route.
  return loginData.success ? <Outlet /> : <Navigate to='/' />;
};

export default Auth;
