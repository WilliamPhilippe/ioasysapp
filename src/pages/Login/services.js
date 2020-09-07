import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function sendSignIn({ email, password }) {
  let response;

  try {
    response = await api.post('users/auth/sign_in', {
      email,
      password,
    });

    api.defaults.headers.common['access-token'] =
      response.headers['access-token'];
    api.defaults.headers.common.uid = response.headers.uid;
    api.defaults.headers.common.client = response.headers.client;
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response;
}

export { sendSignIn };
