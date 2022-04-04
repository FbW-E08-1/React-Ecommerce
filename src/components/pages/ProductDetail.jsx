import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav';

import MyContext from '../../context/MyContext';
import addToCart from '../../helpers/addToCart';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, image, price, ingredients } = location?.state || {};

  const { cartItems, cartItemsDispatch } = useContext(MyContext);

  return (
    <main>
      <Nav />
      <section className='details-page'>
        <img src={image} alt='title' />
        <aside className='details-aside'>
          <h4>{title}</h4>
          <p>€{price}</p>
          <h2>Ingredients</h2>
          {ingredients?.map((ingredient, i) => (
            <p key={i}>{ingredient}</p>
          ))}
          <button
            className='details-addToCart-button'
            onClick={() =>
              addToCart(location?.state, cartItems, cartItemsDispatch)
            }>
            Add to Cart
          </button>
        </aside>
      </section>
      <button className='details-button' onClick={() => navigate(-1)}>
        Return
      </button>
    </main>
  );
};

export default ProductDetail;
