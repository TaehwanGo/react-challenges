import React from 'react';
import styled from 'styled-components';

const Name = styled.h3`
  padding: 5px 0px;
  text-decoration: underline;
`;

export const Markets = ({ name }) => <Name>{name}</Name>;
