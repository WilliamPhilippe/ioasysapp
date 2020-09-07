import api from '../../services/api';
import { RequestException } from '../../utils/requestException';

async function sendSignIn({ email, password }) {
  let response;

  try {
    response = await api.post('users/auth/sign_in', {
      email,
      password,
    });
  } catch (error) {
    throw new RequestException(error.response.data);
  }

  return response;
}

export { sendSignIn };
