import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Content, LogoContainer, FormContent, Loading } from './styles';

import Logo from '../../assets/logo-login.png';

import { sendSignIn } from './services';

function Login({ history }) {
  const { register, handleSubmit, errors } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    try {
      await sendSignIn(data);
      history.push('/');
    } catch (err) {
      setErrorMessage(err.response.errors[0]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Content>
      <div className="container">
        <FormContent>
          <LogoContainer>
            <img src={Logo} alt="Ioasys Logo" />
          </LogoContainer>

          <h5>Bem vindo ao Empresas</h5>

          {loading && (
            <Loading>
              <i className="small material-icons">autorenew</i>
            </Loading>
          )}

          <div className="row">
            <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
              <div
                className="row"
                style={{
                  marginBottom: 0,
                }}
              >
                <div className="input-field col s12">
                  <i className="material-icons prefix">mail_outline</i>
                  <input
                    name="email"
                    ref={register}
                    id="icon_prefix"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="icon_prefix">E-mail</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">more_horiz</i>
                  <input
                    name="password"
                    ref={register}
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label htmlFor="password">Password</label>
                  {errorMessage && (
                    <span className="error-text">
                      Credenciais informadas são inválidas, tente novamente
                    </span>
                  )}
                </div>
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Entrar
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </FormContent>
      </div>
    </Content>
  );
}

export default Login;
