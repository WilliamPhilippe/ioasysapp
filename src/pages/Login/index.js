import React from 'react';

// import { Container } from './styles';


function Login() {
  return (
    <div class='container' style={{ backgroundColor: '#ebe9d7' }}>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s3">
              <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;