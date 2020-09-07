import React from 'react';

import PropTypes from 'prop-types';

import { NavContent, LogoContainer } from './styles';

import Logo from '../../assets/logo-white.png';

function NavContainer({ intern }) {
  return (
    <NavContent>
      <div className="nav-wrapper">
        <div className="row">
          {intern}
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
  );
}

NavContainer.propTypes = {
  intern: PropTypes.element.isRequired,
};

export default NavContainer;
