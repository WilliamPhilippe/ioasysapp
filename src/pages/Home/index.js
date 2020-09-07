import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';

import NavContent from '../../components/NavContainer';

import Loading from '../../components/Loading';

import { Content } from './styles';

import { getEmpresasByName } from './services';

import api from '../../services/api';

function Home({ history }) {
  if (!api.defaults.headers.common.uid) history.push('/login');

  const { register, handleSubmit } = useForm();

  const [empresas, setEmpresas] = useState([]);

  const [loading, setLoading] = useState(false);
  const [messageInfo, setMessageInfo] = useState('Realize uma busca.');

  async function onSubmit(data) {
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

  return (
    <Content>
      <div className="container">
        <NavContent
          intern={
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
          }
        />

        {loading ? (
          <Loading />
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

Home.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Home;
