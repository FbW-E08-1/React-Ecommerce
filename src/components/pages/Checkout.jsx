import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import Cart from './Cart';

//Import all helper functions
//import removeCocktail from '../../helpers/removeCocktail';
//import calculateLineTotals from '../../helpers/calculateLineTotals';
import calculateGrandTotals from '../../helpers/calculateGrandTotal';

const Checkout = () => {
  //Get functionality from our Context
  const { cartItems } = useContext(MyContext);

  //Initialize the navigate hook
  const navigate = useNavigate();

  //If there are no items in our cart display a message
  //   if (cartItems.length === 0)
  //     return (
  //       <main>
  //         <Nav />
  //         <section className='cart-no-items'>
  //           <p>There are no items in your cart to order</p>
  //           <button onClick={() => navigate('/products')}>Return</button>
  //         </section>
  //       </main>
  //     );

  //Calculate line totals using the calculateLineTotals helper function.
  //const lineTotals = calculateLineTotals(cartItems);

  //Calculate grand Totals using the calculateGrandTotals helper function.
  const grandTotal = calculateGrandTotals(cartItems);

  //Create cart items for display.
  //   const cocktailList = cartItems.map((cocktail, index) => {
  //     return (
  //       <aside key={cocktail.id} className='cart-line'>
  //         <img src={cocktail.image} alt={cocktail.name} />
  //         <aside className='cart-text'>
  //           <h5>{cocktail.title}</h5>
  //           <p>
  //             Quantity <span>{cocktail.quantity}</span>
  //           </p>
  //           <p>€{cocktail.price.toFixed(2)}</p>
  //           <h4>Line Total {lineTotals[index].toFixed(2)}</h4>
  //         </aside>

  //         {/* If the remove button is clicked, remove the item with the removeCocktail helper function */}
  //         <button
  //           className='remove-button'
  //           onClick={() =>
  //             removeCocktail(cocktail, cartItems, cartItemsDispatch)
  //           }>
  //           Remove cocktail
  //         </button>
  //       </aside>
  //     );
  //   });

  //Display cart items plus totals.
  return (
    <main>
      <section className='cart-page'>
        <Cart />
        <aside className='checkout-aside'>
          <h4>Shipping free</h4>
          <p>
            Grand Total <span>€{grandTotal.toFixed(2)}</span>
          </p>
          {/* Place your order link */}
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
