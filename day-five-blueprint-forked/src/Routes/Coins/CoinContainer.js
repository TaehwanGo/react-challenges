// container : full react component with state
import React from "react";
import { coinsApi } from "../../api";
import CoinPresenter from "./CoinPresenter";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true
  };
  // here wii be all the logics
  async componentDidMount() {
    try {
      const { data: coins } = await coinsApi.coins();
      this.setState({
        coins
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
    const { coins, error, loading } = this.state;
    return <CoinPresenter coins={coins} error={error} loading={loading} />;
  }
}
