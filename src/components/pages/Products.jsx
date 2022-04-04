import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import Nav from '../Nav';
import Product from './Product';

const Products = () => {
  const { cocktailData } = useContext(MyContext);

  const cocktailList = cocktailData.map((cocktail) => (
    <Product key={cocktail.id} cocktail={cocktail} />
  ));

  return (
    <main>
      <Nav />
      <section className='products'>{cocktailList}</section>
    </main>
  );
};

export default Products;
