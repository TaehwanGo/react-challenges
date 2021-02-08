import React from 'react';
import ExchangesPresenter from './ExchangesPresenter';
import { getCoinDetail } from '../../../api';

export default class extends React.Component {
  constructor({ props }) {
    super();
    console.log(props);
    this.getCoinExchanges(props?.match?.params.coinId);
    this.props = props;
  }

  state = {
    loading: true,
    exchanges: [],
  };
  getCoinExchanges = async coinId => {
    try {
      const { data: exchanges } = await getCoinDetail.exchanges({ coinId });
      console.log('exchanges:', exchanges);
      this.setState({
        exchanges,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <ExchangesPresenter {...this.state} />;
  }
}
