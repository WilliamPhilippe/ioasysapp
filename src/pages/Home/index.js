import React, { useEffect } from 'react';

import api from '../../services/api';

function Home({ history }) {
  !api.defaults.headers.common.uid && history.push('/login');

  return <div>this</div>;
}

export default Home;
