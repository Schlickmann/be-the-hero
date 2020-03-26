import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, InputGroup } from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero"/>
          <h1>Register</h1>
          <p>Create an account, login into the platform and help people to find the cases of your NGO.</p>
          <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02041" /> Already have an account</Link>
        </section>

        <form>
          <input type="text" placeholder="NGO's name" />
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Whatsapp" />
          
          <InputGroup>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </InputGroup>
          <input type="text" placeholder="Contry" />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </Content>
    </Container>
  )
}
