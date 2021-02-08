import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';

const Container = styled.div`
  padding: 10px 0px;
`;

const CoinPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {console.log(coins)}
      {coins?.length > 0 &&
        coins.map(item => (
          <Container key={item.id}>
            {`#${item.rank} ${item.name}/${item.symbol}`}
          </Container>
        ))}
    </>
  );

CoinPresenter.propTypes = {
  coins: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default CoinPresenter;
