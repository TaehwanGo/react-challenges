import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px 0px;
`;
const Symbol = styled.span`
  margin-right: 5px;
`;
const Title = styled.h3`
  font-weight: 600;
`;

export const Exchanges = ({ name, fiats }) =>
  fiats.length !== 0 && (
    <Container>
      <Title>{name}</Title>
      {fiats.map((fiat, index) => (
        <Symbol key={index}>{fiat.symbol}</Symbol>
      ))}
    </Container>
  );
