import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { Content, LogoContainer, NavContent, Loading } from './styles';

import { getEmpresasByName } from './services';

import api from '../../services/api';

import Logo from '../../assets/logo-white.png';

function Home({ history }) {
  !api.defaults.headers.common.uid && history.push('/login');

  const { register, handleSubmit, watch, errors } = useForm();

  const [empresas, setEmpresas] = useState([]);

  const [loading, setLoading] = useState(false);
  const [messageInfo, setMessageInfo] = useState('Realize uma busca.');

  async function onSubmit(data) {
    console.log(data);

    setLoading(true);

    try {
      const response = await getEmpresasByName(data);

      setEmpresas(response.data.enterprises);
      if (response.data.enterprises.length === 0)
        setMessageInfo('Não foi encontrada nenhuma empresa.');
    } catch (err) {
      setMessageInfo(err.response.errors[0]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(empresas);
  }, [empresas]);

  return (
    <Content>
      <div className="container">
        <NavContent>
          <div className="nav-wrapper">
            <div className="row">
              <form className="col s4" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field">
                  <input
                    name="search"
                    ref={register}
                    id="search"
                    type="search"
                    required
                    placeholder="Busque uma empresa"
                    style={{ height: 64 }}
                  />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>
                </div>
              </form>
              <LogoContainer className="imgedit col s4">
                <img
                  src={Logo}
                  alt="ioasys"
                  style={{
                    objectFit: 'cover',
                    width: 'auto',
                    height: 'auto',
                    maxHeight: 50,
                  }}
                />
              </LogoContainer>
            </div>
          </div>
        </NavContent>

        {loading ? (
          <Loading>
            <i className="small material-icons">autorenew</i>
          </Loading>
        ) : (
          <>
            {!empresas.length && (
              <div className="row">
                <h5 className="col s4" style={{ textAlign: 'center' }}>
                  {messageInfo}
                </h5>
              </div>
            )}

            <div>
              <ul style={{}}>
                <li
                  style={{
                    maxWidth: 500,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}
                >
                  <div className="card horizontal" />
                </li>

                {!!empresas.length &&
                  empresas.map(item => (
                    <li
                      style={{
                        maxWidth: 500,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                      }}
                    >
                      <div className="card horizontal">
                        <div className="card-image">
                          <img
                            alt={item.enterprise_name}
                            style={{
                              objectFit: 'cover',
                              width: 'auto',
                              height: 'auto',
                              maxHeight: 160,
                            }}
                            src={`https://empresas.ioasys.com.br${item.photo}`}
                          />
                        </div>
                        <div className="card-stacked">
                          <div className="card-content">
                            <h6>{item.enterprise_name}</h6>
                            <p style={{ marginBottom: 10 }}>
                              {item.enterprise_type.enterprise_type_name}
                            </p>
                            <a
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                history.push(`/details/${item.id}`)
                              }
                            >
                              detalhes
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </Content>
  );
}

export default Home;
