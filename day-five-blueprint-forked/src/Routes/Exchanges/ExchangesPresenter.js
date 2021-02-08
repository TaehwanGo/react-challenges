import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Loader } from '../../Components/Loader';

const Container = styled.div`
  padding: 10px 0px;
`;

const LinkToNewTab = styled.a`
  padding: 5px 0px;
  text-decoration: underline;
`;

const Description = styled.p`
  padding: 5px 0px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const descriptionLength = 50;

const ExchangesPresenter = ({ exchanges, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {console.log(exchanges)}
      {exchanges?.length > 0 &&
        exchanges.map(item => (
          <Container key={item.id}>
            <Title>{`${item.name}`}</Title>
            <Description>
              {item?.description?.length > descriptionLength
                ? item.description.substring(0, descriptionLength - 3) + '...'
                : item.description}
            </Description>
            <LinkToNewTab href={item.links?.website} target="_blank">
              {item.links?.website}
            </LinkToNewTab>
          </Container>
        ))}
    </>
  );

ExchangesPresenter.propTypes = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default ExchangesPresenter;
