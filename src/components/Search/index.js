import React from 'react';

import PropTypes from 'prop-types';

import { Form, Input } from '@rocketseat/unform';

import { FaSearch } from 'react-icons/fa';

import { FormContainer, Button } from './styles';

export default function Search({ handleSearch, set, placeholder, loading }) {
  /**
   * Caso o component receba o 'set', então ele altera o estado do componente pai,
   * caso não, então ele retorna a função handleSearch do componente pai.
   * @param {String} field
   */
  function handleclick({ field }) {
    set ? set(field) : handleSearch(field);
  }

  /**
   * Para um retorno em tempo real,
   * a cada mudança do input, o estado é alterado
   * @param {string} field
   */

  function handleChange(field) {
    if (set) set(field);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleclick}>
        <Input
          name="field"
          placeholder={placeholder}
          onChange={e => handleChange(e.target.value)}
        />

        <Button loading={loading} type="submit">
          <FaSearch size={18} color="#FFF" />
        </Button>
      </Form>
    </FormContainer>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func,
  set: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Search.defaultProps = {
  handleSearch: null,
  set: null,
  loading: false,
};
