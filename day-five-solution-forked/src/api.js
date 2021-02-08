import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = () => api.get("/coins");
export const getCoinDetail = {
  coinDetail: ({ coinId }) => api.get(`/coins/${coinId}`),
  markets: ({ coinId }) => api.get(`/coins/${coinId}/markets`),
  exchanges: ({ coinId }) => api.get(`/coins/${coinId}/exchanges`)
};
