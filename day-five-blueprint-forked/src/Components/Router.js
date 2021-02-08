import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Routes/Coins/CoinContainer";
import Exchanges from "../Routes/Exchanges/ExchangesContainer";
import Prices from "../Routes/Prices/PricesContainer";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
    </Router>
  );
};
// Router가 모든 정보를 Route들에게 줄 것임 그래서 Header처럼 withRouter로 감싸지 않아도
// withRouter가 제공하는 props를 default로 받아서 사용 가능
