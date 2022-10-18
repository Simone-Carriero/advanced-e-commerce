import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  AuthWrapper,
} from './pages';

function App() {
  return (
    <AuthWrapper>
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
              element={<Products />}
            />
            <Route
              path='products/:id'
              element={<SingleProduct />}
            />
            <Route
              path='checkout'
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route
              path='*'
              element={<Error />}
            />
          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
