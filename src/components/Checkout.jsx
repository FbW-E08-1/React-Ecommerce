import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

import Nav from './Nav';

import removeCocktail from './helpers/removeCocktail';
import calculateLineTotals from './helpers/calculateLineTotals';
import calculateGrandTotals from './helpers/calculateGrandTotal';

const Checkout = () => {
  const context = useContext(MyContext);
  const { cartItems, setCartItems } = context;
  const navigate = useNavigate();

  const lineTotals = calculateLineTotals(cartItems);
  const grandTotal = calculateGrandTotals(cartItems);

  if (cartItems.length === 0)
    return (
      <main>
        <Nav />
        <section className='cart-no-items'>
          <p>There are no items in your cart to order</p>
          <button onClick={() => navigate('/products')}>Return</button>
        </section>
      </main>
    );

  const cocktailList = cartItems.map((cocktail, index) => {
    return (
      <aside key={cocktail.id} className='cart-line'>
        <img src={cocktail.image} alt={cocktail.name} />
        <aside className='cart-text'>
          <h5>{cocktail.title}</h5>
          <p>
            Quantity <span>{cocktail.quantity}</span>
          </p>
          <p>€{cocktail.price.toFixed(2)}</p>
          <h4>Line Total {lineTotals[index].toFixed(2)}</h4>
        </aside>
        <button
          className='remove-button'
          onClick={() => removeCocktail(cocktail, cartItems, setCartItems)}>
          Remove cocktail
        </button>
      </aside>
    );
  });

  return (
    <main>
      <Nav />
      <section className='cart-page'>
        {cocktailList}
        <aside className='checkout-aside'>
          <h4>Shipping free</h4>
          <p>
            Grand Total <span>€{grandTotal.toFixed(2)}</span>
          </p>
          <Link to='/orderPlaced'>
            <button>Place your order</button>
          </Link>
          <button onClick={() => navigate('/products')}>Return</button>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
