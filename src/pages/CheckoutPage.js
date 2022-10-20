import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart_item } = useCartContext();
  return (
    <main>
      <PageHero title='Checkout' />
      <Wrapper className='page'>
        <div className='section section-center'>
          {cart_item.length < 1 ? (
            <Link
              to='/products'
              className='btn'>
              Fill it
            </Link>
          ) : (
            <StripeCheckout />
          )}
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
