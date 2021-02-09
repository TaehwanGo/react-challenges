import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
  :hover {
    text-decoration: underline;
  }
`;

const Ranking = styled.span`
  font-weight: 600;
`;

const Coin = ({ id, name, symbol, rank }) => (
  <Container>
    <Link to={`coins/${id}`}>
      <Ranking>#{rank}</Ranking> {name}/{symbol}&rarr;
    </Link>
  </Container>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};

export default Coin;
