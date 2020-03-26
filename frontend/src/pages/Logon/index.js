import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import { Container, FormSection } from './styles';

export default function Logon() {
  return (
    <Container>
      <div>
        <FormSection>
          <img src={logo} alt="Be The Hero"/>
          <form>
            <h1>Login into the system</h1>

            <input type="text" placeholder="Type your ID" />
            <button className="button" type="submit">Sign In</button>
            
            <a href="/register"><FiLogIn size={16} color="#e02041" /> Create an Account</a>
          </form>
        </FormSection> 
        <img src={heroes} alt="The Heroes"/>
      </div>
    </Container>
  );
}
