import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerIntern } from './styles';

import Header from './Header';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <ContainerIntern>{children}</ContainerIntern>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
