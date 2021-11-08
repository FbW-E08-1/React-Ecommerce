import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const ProductDetail = () => {
  const location = useLocation();
  const { title, image, price, ingredients } = location.state.cocktail;
  const navigate = useNavigate();

  return (
    <main>
      <Nav />
      <section className='details-page'>
        <img src={image} alt='title' />
        <aside className='details-aside'>
          <h4>{title}</h4>
          <p>€{price}</p>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <p>{ingredient}</p>
          ))}
        </aside>
      </section>
      <button className='details-button' onClick={navigate(-1)}>
        Return
      </button>
    </main>
  );
};

export default ProductDetail;
