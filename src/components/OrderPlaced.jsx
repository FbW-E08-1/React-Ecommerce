import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import MyContext from '../context/MyContext';

const OrderPlaced = () => {
  const context = useContext(MyContext);
  const { setCartItems } = context;
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <main>
      <Nav />
      <section className='orders-placed'>
        <p>Order Placed</p>
        <button onClick={() => navigate('/products', { replace: true })}>
          Carry on shopping
        </button>
      </section>
    </main>
  );
};

export default OrderPlaced;
