import React from 'react';
import MarketsPresenter from './MarketsPresenter';
import { getCoinDetail } from '../../../api';

export default class extends React.Component {
  constructor({ props }) {
    super();
    console.log('props:', props);
    console.log('Market constructor');
    console.log(props);
    this.getCoinMarkets(props?.match?.params.coinId);
    this.props = props;
  }

  state = {
    loading: true,
    markets: [],
  };
  getCoinMarkets = async coinId => {
    try {
      const { data: markets } = await getCoinDetail.markets({ coinId });
      console.log('markets:', markets);
      this.setState({
        markets,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return <MarketsPresenter {...this.state} />;
  }
}
