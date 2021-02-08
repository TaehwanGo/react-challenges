// container : full react component with state
import React from "react";
import { pricesApi } from "../../api";
import PricesPresenter from "./PricesPresenter";

export default class extends React.Component {
  state = {
    prices: null,
    error: null,
    loading: true
  };
  // here wii be all the logics
  async componentDidMount() {
    // 밖에서 api 함수를 분리하고 this.api함수 이런식으로 불러와도 됨
    try {
      const { data: prices } = await pricesApi.prices();
      // console.log(prices);
      this.setState({
        prices
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: "Can't find coins information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { prices, error, loading } = this.state;
    // console.log(this.state);
    return <PricesPresenter prices={prices} error={error} loading={loading} />;
  }
}
