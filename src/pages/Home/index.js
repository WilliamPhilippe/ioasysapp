import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { Content, LogoContainer, NavContent, CardContainer } from './styles';

import { getEmpresasByName } from './services';

import api from '../../services/api';

import Logo from '../../assets/logo-white.png';

function Home({ history }) {
  // !api.defaults.headers.common.uid && history.push('/login');

  const { register, handleSubmit, watch, errors } = useForm();

  const [empresas, setEmpresas] = useState([
    {
      id: 15,
      email_enterprise: null,
      facebook: null,
      twitter: null,
      linkedin: null,
      phone: null,
      own_enterprise: false,
      enterprise_name: 'OME Health',
      photo: '/uploads/enterprise/photo/15/240.jpeg',
      description:
        'OME is a preventive health and lifestyle improvement company.',
      city: 'London',
      country: 'UK',
      value: 0,
      share_price: 5000.0,
      enterprise_type: { id: 3, enterprise_type_name: 'Health' },
    },
    {
      id: 19,
      email_enterprise: null,
      facebook: null,
      twitter: null,
      linkedin: null,
      phone: null,
      own_enterprise: false,
      enterprise_name: 'Advatech Healthcare Europe Ltd',
      photo: '/uploads/enterprise/photo/19/240.jpeg',
      description:
        "Hippo Cabs is UK's first dedicated disabled and non-emergency patients transportation on technology platform",
      city: 'LONDON',
      country: 'UK',
      value: 0,
      share_price: 5000.0,
      enterprise_type: { id: 3, enterprise_type_name: 'Health' },
    },
  ]);

  async function onSubmit(data) {
    console.log(data);

    try {
      const response = await getEmpresasByName(data);

      setEmpresas(response.data.enterprises);
    } catch (err) {
      console.log(err);
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

        {!empresas.length && (
          <div className="row">
            <h5 className="col s4" style={{ textAlign: 'center' }}>
              Clique na busca para iniciar.
            </h5>
          </div>
        )}

        <CardContainer>
          <ul style={{}}>
            <li
              style={{ maxWidth: 500, marginRight: 'auto', marginLeft: 'auto' }}
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
                        <a>detalhes</a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </CardContainer>
      </div>
    </Content>
  );
}

export default Home;
