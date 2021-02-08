// container : full react component with state
import React from "react";
import { exchangesApi } from "../../api";
import ExchangesPresenter from "./ExchangesPresenter";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true
  };
  // here wii be all the logics
  async componentDidMount() {
    try {
      const { data: exchanges } = await exchangesApi.exchanges();
      // console.log(prices);
      this.setState({
        exchanges
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
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
