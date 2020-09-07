import React from 'react';

import { useForm } from 'react-hook-form';

import { Content, LogoContainer, FormContent } from './styles';

import Logo from '../../assets/logo-login.png';

import { sendSignIn } from './services';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  async function onSubmit(data) {
    try {
      const response = await sendSignIn(data);

      console.clear();
      console.log(response.headersd);
    } catch (err) {
      console.log('err', err.response);
    }
  }

  return (
    <Content>
      <div className="container">
        <FormContent>
          <LogoContainer>
            <img src={Logo} alt="Ioasys Logo" />
          </LogoContainer>

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
                  <span
                    className="helper-text"
                    data-error="Please, use a valid e-mail."
                  />
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
