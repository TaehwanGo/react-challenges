import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});
/**
(1) / (Homepage) https://api.coinpaprika.com/v1/tickers
(2) /exchanges https://api.coinpaprika.com/v1/exchanges
(3) /coins https://api.coinpaprika.com/v1/coins
 */
// api.get("tickers"); // "/tickers"는 절대경로(absolute url)이므로 상대경로(baseUrl + tickets)를 써야함
// export default api;

export const pricesApi = {
  // implicit(암시적) return
  prices: () => api.get("tickers")
};

export const exchangesApi = {
  exchanges: () => api.get("exchanges")
};

export const coinsApi = {
  coins: () => api.get("coins")
};
