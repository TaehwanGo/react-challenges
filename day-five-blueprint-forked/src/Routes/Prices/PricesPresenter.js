import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';

const Container = styled.div`
  padding: 10px 0px;
`;

const PricesPresenter = ({ prices, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {console.log(prices)}
      {prices?.length > 0 &&
        prices.map(item => (
          <Container key={item.id}>
            {`${item.name} / ${item.symbol}: $${item.quotes.USD.price}`}
          </Container>
        ))}
    </>
  );

PricesPresenter.propTypes = {
  prices: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default PricesPresenter;
