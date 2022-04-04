import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import addToCart from '../../helpers/addToCart';

const Product = ({ cocktail }) => {
  const { title, image, price } = cocktail;

  const { cartItems, cartItemsDispatch } = useContext(MyContext);

  return (
    <section className='product' style={{ backgroundImage: `URL(${image})` }}>
      <Link to='/productDetail' state={cocktail}>
        <h5>{title}</h5>
      </Link>
      <aside className='products-aside'>
        <button
          onClick={() => addToCart(cocktail, cartItems, cartItemsDispatch)}>
          Add to Cart
        </button>
        <p>€{price.toFixed(2)}</p>
      </aside>
    </section>
  );
};

export default Product;
