import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../Components/Loader';
import { Markets } from '../../../Components/Markets';

// loading 조건 : url이 일치하면서 로딩도 true일때

const MarketsPresenter = ({ loading, markets }) =>
  loading ? (
    <Loader />
  ) : (
    markets.map(market => <Markets name={market.exchange_name} />)
  );

MarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_id: PropTypes.string.isRequired,
      exchange_name: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default MarketsPresenter;
