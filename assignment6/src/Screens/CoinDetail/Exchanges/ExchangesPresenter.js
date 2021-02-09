import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../Components/Loader';
import { Exchanges } from '../../../Components/Exchanges';

const ExchangesPresenter = ({ loading, exchanges }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange, index) => <Exchanges key={index} {...exchange} />)
  );

ExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.array.isRequired,
};

export default ExchangesPresenter;
