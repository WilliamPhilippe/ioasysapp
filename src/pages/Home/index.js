import React, { useEffect } from 'react';

import { Content, LogoContainer, NavContent } from './styles';

import api from '../../services/api';

import Logo from '../../assets/logo-white.png';

function Home({ history }) {
  // !api.defaults.headers.common.uid && history.push('/login');

  return (
    <Content>
      <div className="container">
        <NavContent>
          <div className="nav-wrapper">
            <div className="row">
              <form className="col s4">
                <div className="input-field">
                  <input
                    id="search"
                    type="search"
                    required
                    style={{ height: 64 }}
                  />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons">search</i>
                  </label>

                  <i className="material-icons">close</i>
                </div>
              </form>
              <LogoContainer className="imgedit col s4">
                <img
                  src={Logo}
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
      </div>
    </Content>
  );
}

export default Home;
