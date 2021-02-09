import React from 'react';
import CoinDetailPresenter from './CoinDetailPresenter';
import { getCoinDetail } from '../../api';
import { Route } from 'react-router-dom';

export default class extends React.Component {
  state = {
    loading: true,
    coinDetail: {},
  };
  getCoinDetail = async coinId => {
    try {
      const { data: coinDetail } = await getCoinDetail.coinDetail({ coinId });
      // console.log(coinDetail);
      this.setState({
        coinDetail,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  async componentDidMount() {
    const { coinId } = await this.props.match.params;
    this.coinId = coinId;
    this.getCoinDetail(coinId);
  }

  render() {
    return <CoinDetailPresenter {...this.state} props={this.props} />;
  }
}
