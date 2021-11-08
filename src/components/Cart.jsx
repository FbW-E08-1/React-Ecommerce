import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

import Nav from './Nav';

import addToCart from './helpers/addToCart';
import reduceQuantity from './helpers/reduceQuantity';
import removeCocktail from './helpers/removeCocktail';
import calculateLineTotals from './helpers/calculateLineTotals';

const Cart = () => {
  const context = useContext(MyContext);
  const { cartItems, setCartItems } = context;
  const navigate = useNavigate();

  const lineTotals = calculateLineTotals(cartItems);

  if (cartItems.length === 0)
    return (
      <main>
        <Nav />
        <section className='cart-no-items'>
          <p>There are no items in your cart</p>
          <button onClick={() => navigate(-1)}>Return</button>
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
        <button onClick={() => addToCart(cocktail, cartItems, setCartItems)}>
          +
        </button>
        <button
          onClick={() => reduceQuantity(cocktail, cartItems, setCartItems)}>
          -
        </button>
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
      <section className='cart-page'>{cocktailList}</section>
    </main>
  );
};

export default Cart;
