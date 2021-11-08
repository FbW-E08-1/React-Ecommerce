import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import MyProvider from '../context/MyProvider';

import Login from './Login';
import Products from './Products';
import ProductDetail from './ProductDetail';
import OrderPlaced from './OrderPlaced';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from './Footer';
import NotFound from './NotFound';

const Routes = () => (
  <MyProvider>
    <Router>
      <main>
        <Switch>
          <Route path='/' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productDetail' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderPlaced' element={<OrderPlaced />} />
          <Route path='*' element={<NotFound />} />
        </Switch>
        <Footer />
      </main>
    </Router>
  </MyProvider>
);

export default Routes;
