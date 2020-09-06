import React from 'react';

import { render } from '@testing-library/react';

import Form from '../../../components/Search';

describe('Search component', () => {
  it('should be able to set the state SearchParams', () => {
    render(<Form placeholder="Testing" />);
  });
});
