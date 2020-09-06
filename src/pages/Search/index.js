import React, { useState } from 'react';

import PropTypes from 'prop-types';

import api from '../../services/api';

import Form from '../../components/Search';

import { Container, LogoContainer, Content, Error } from './styles';

import Logo from '../../assets/GitHub_Logo_NEW.png';

export default function Search({ history }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSarch(username) {
    setError('');
    if (!username) return;

    setLoading(true);

    try {
      await api.get(`https://api.github.com/users/${username}`);

      history.push(`/profile/${username}`);
    } catch (err) {
      const { status } = err.response;

      if (status === 404) setError('User not found.');
      else setError('Connection error.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={Logo} alt="Github" />
          <span>Search</span>
        </LogoContainer>

        <Form
          handleSearch={handleSarch}
          placeholder="Type the username..."
          loading={loading}
        />
        {error && <Error>{error}</Error>}
      </Content>
    </Container>
  );
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
