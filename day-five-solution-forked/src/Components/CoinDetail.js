import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
const Description = styled.p`
  margin-bottom: 16px;
`;
const Bold = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  border: 2px green solid;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${props => (props.selected ? 'green' : 'white')};
  color: ${props => (props.selected ? 'white' : 'black')};
  :focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  padding: 16px 0px;
`;

export const CoinDetail = ({
  id,
  name,
  symbol,
  description,
  rank,
  open_source,
  proof_type,
  org_structure,
  selected,
}) => (
  <div>
    <h1>
      {name}/{symbol}
    </h1>
    <Description>{description}</Description>
    <div>
      <Bold>Rank: </Bold>
      {rank}
    </div>
    <div>
      <Bold>Open Source: </Bold>
      {open_source ? 'Yes' : 'No'}
    </div>
    <div>
      <Bold>Proof Type: </Bold>
      {proof_type}
    </div>
    <div>
      <Bold>Structure: </Bold>
      {org_structure}
    </div>
    <ButtonContainer>
      <Link to={`/coins/${id}/markets`}>
        <Button selected={selected === '/markets'}>MARKETS</Button>
      </Link>

      <Link to={`/coins/${id}/exchanges`}>
        <Button selected={selected === '/exchanges'}>EXCHANGES</Button>
      </Link>
    </ButtonContainer>
  </div>
);

CoinDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  open_source: PropTypes.bool.isRequired,
  proof_type: PropTypes.string.isRequired,
  org_structure: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  onClickMarkets: PropTypes.func,
  onClickExchanges: PropTypes.func,
};
