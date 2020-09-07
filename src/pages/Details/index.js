import React, { useState, useEffect } from 'react';

import {
  Content,
  LogoContainer,
  NavContent,
  Loading,
  CardContent,
} from './styles';

import { getEmpresaById } from './services';

import api from '../../services/api';

import Logo from '../../assets/logo-white.png';

function Home({ history, match }) {
  !api.defaults.headers.common.uid && history.push('/login');

  const [empresa, setEmpresa] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEnterprise() {
      setLoading(true);

      try {
        const response = await getEmpresaById(match.params.id);

        setEmpresa(response.data.enterprise);
      } catch (err) {
        // setMessageInfo(err.response.errors[0]);
      } finally {
        setLoading(false);
      }
    }

    loadEnterprise();
  }, [match.params.id]);

  return (
    <Content>
      <div className="container">
        <NavContent>
          <div className="nav-wrapper">
            <div className="row">
              <div
                onClick={() => history.push('/')}
                style={{ cursor: 'pointer' }}
                className="col s4"
              >
                <i className="material-icons">arrow_back</i>
              </div>
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
          <div className="card large">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={`https://empresas.ioasys.com.br${empresa.photo}`}
              />
            </div>
            <CardContent className="card-content">
              <h2 className="card-title">{empresa.enterprise_name}</h2>
              <p>{empresa.description}</p>

              <ul>
                <li>
                  <p>
                    Type:{' '}
                    {empresa.enterprise_type &&
                      empresa.enterprise_type.enterprise_type_name}
                  </p>
                </li>
                <li>
                  <p>Country: {empresa.country}</p>
                </li>
                <li>
                  <p>City: {empresa.city}</p>
                </li>
              </ul>
            </CardContent>
          </div>
        )}
      </div>
    </Content>
  );
}

export default Home;
