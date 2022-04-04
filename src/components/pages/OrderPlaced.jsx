import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';
import MyContext from '../../context/MyContext';
import { ACTIONS } from '../../actions/actions';

const OrderPlaced = () => {
  const { cartItemsDispatch } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    cartItemsDispatch({ type: ACTIONS.RESET, payload: [] });
  }, [cartItemsDispatch]);

  return (
    <main>
      <Nav />
      <section className='orders-placed'>
        <p>Order Placed</p>
        <button onClick={() => navigate('/products')}>Carry on shopping</button>
      </section>
    </main>
  );
};

export default OrderPlaced;
