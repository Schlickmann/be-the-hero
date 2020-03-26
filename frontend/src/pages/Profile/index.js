import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, ButtonGroup } from './styles';

export default function Profile() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Welcome, NGO!</span>

        <div>
          <Link className="button" to='/incidents/new'>Add incident</Link>
          <button type="button">
            <FiPower size={18} color="#e02041" />
          </button>
        </div>
      </header>

      <h1>Current incidents</h1>

      <ul>
        <li>
          <strong>CASE: </strong>
          <p>Incident 1</p>
          <strong>DESCRIPTION: </strong>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at itaque perferendis laboriosam reiciendis asperiores aut, est assumenda, ut culpa esse? Rem laborum necessitatibus incidunt? Ab aperiam velit veniam dicta.</p>

          <strong>VALUE NEEDED: </strong>
          <p>CAD 120.00</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASE: </strong>
          <p>Incident 1</p>
          <strong>DESCRIPTION: </strong>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at itaque perferendis laboriosam reiciendis asperiores aut, est assumenda, ut culpa esse? Rem laborum necessitatibus incidunt? Ab aperiam velit veniam dicta.</p>

          <strong>VALUE NEEDED: </strong>
          <p>CAD 120.00</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASE: </strong>
          <p>Incident 1</p>
          <strong>DESCRIPTION: </strong>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at itaque perferendis laboriosam reiciendis asperiores aut, est assumenda, ut culpa esse? Rem laborum necessitatibus incidunt? Ab aperiam velit veniam dicta.</p>

          <strong>VALUE NEEDED: </strong>
          <p>CAD 120.00</p>

          <button type="button">
            <FiTrash2 size={20}  color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
