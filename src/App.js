import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import {
  BasicLayout,
  Home,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<BasicLayout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='cart'
            element={<Cart />}
          />
          <Route
            path='products'
            element={<Products />}>
            <Route
              path=':id'
              element={<SingleProduct />}
            />
          </Route>
          <Route
            path='checkout'
            element={<Checkout />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
