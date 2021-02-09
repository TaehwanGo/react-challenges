import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Coins from '../Screens/Coins';
import Exchanges from '../Screens/Exchanges';
import Prices from '../Screens/Prices';
import CoinDetail from '../Screens/CoinDetail';

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins/:coinId/markets" exact component={CoinDetail} />
      <Route path="/coins/:coinId/exchanges" exact component={CoinDetail} />
      <Route path="/coins/:coinId" exact component={CoinDetail} />
      <Route path="/coins" exact component={Coins} />
    </Router>
  );
};
