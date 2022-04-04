import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import Nav from '../Nav';

//Import all helper functions
import addToCart from '../../helpers/addToCart';
import reduceQuantity from '../../helpers/reduceQuantity';
import removeCocktail from '../../helpers/removeCocktail';
import calculateLineTotals from '../../helpers/calculateLineTotals';

const Cart = () => {
  //Get functionality from our Context
  const { cartItems, cartItemsDispatch } = useContext(MyContext);

  //Initialize the navigate hook
  const navigate = useNavigate();

  //If there are no items in our cart display a message
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

  //Calculate line totals.
  const lineTotals = calculateLineTotals(cartItems);

  //Create cart items for display
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

        {/* If the plus sign is clicked increment the quantity with the addToCart helper*/}
        <button
          onClick={() => addToCart(cocktail, cartItems, cartItemsDispatch)}>
          +
        </button>

        {/* If the minus sign is clicked decrement the quantity with the reduceQuantity helper*/}
        <button
          onClick={() =>
            reduceQuantity(cocktail, cartItems, cartItemsDispatch)
          }>
          -
        </button>

        {/* If the remove button is clicked, remove the item with the removeCocktail helper */}
        <button
          className='remove-button'
          onClick={() =>
            removeCocktail(cocktail, cartItems, cartItemsDispatch)
          }>
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
