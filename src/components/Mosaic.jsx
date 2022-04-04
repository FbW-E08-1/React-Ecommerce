import { useContext } from 'react';

import MyContext from '../context/MyContext';

const Mosaic = () => {
  const { cocktailData } = useContext(MyContext);

  //Display a mosaic from all the images in our dataset
  const cocktailList = cocktailData.map((cocktail) => (
    <img
      className={cocktail.class}
      key={cocktail.id}
      src={cocktail.image}
      alt=''
    />
  ));

  return <section className='grid'>{cocktailList}</section>;
};

export default Mosaic;
