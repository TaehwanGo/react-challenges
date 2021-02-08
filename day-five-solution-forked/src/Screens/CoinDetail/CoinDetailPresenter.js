import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import { CoinDetail } from '../../Components/CoinDetail';
import Markets from './Markets';
import Exchanges from './Exchanges';
import { Route, Switch } from 'react-router-dom';

// loading 조건 : url이 일치하면서 로딩도 true일때

const CoinDetailPresenter = ({ loading, coinDetail, props }) => {
  const [_, btnSelected] = window.location.href.split(`${coinDetail.id}`);
  console.log('btnSelected:', btnSelected);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CoinDetail
          key={coinDetail.id}
          {...coinDetail}
          selected={btnSelected}
        />
      )}
      {/* url 확인 후 화면 그리기 */}

      {/* <Switch>
        <Route path="/coins/:coinId/markets" exact component={Markets} />
        <Route path="/coins/:coinId/exchanges" exact component={Exchanges} />
      </Switch> */}

      {btnSelected === '/markets' && <Markets props={props} />}
      {btnSelected === '/exchanges' && <Exchanges props={props} />}
    </>
  );
};

CoinDetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coinDetail: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired,
      open_source: PropTypes.bool.isRequired,
      proof_type: PropTypes.string.isRequired,
      org_structure: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default CoinDetailPresenter;
