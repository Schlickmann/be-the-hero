import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero"/>
          <h1>Add new incident</h1>
          <p>Please, detail the case in order to find a Hero(es) to help you solve it.</p>
          <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#e02041" /> Back to home</Link>
        </section>

        <form>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Description" />
          <input type="text" placeholder="Value needed" />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </Content>
    </Container>
  )
}
