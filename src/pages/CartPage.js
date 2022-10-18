import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  const { cart_item } = useCartContext();
  return (
    <Wrapper>
      <PageHero title='cart' />
      <div className='page section section-center'>
        {!cart_item.length ? (
          <section className='empty'>
            <h2>Your cart is empty</h2>
            <Link
              to='/products'
              className='btn'>
              Fill it
            </Link>
          </section>
        ) : (
          <CartContent />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
