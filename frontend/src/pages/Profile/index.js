import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Profile() {
  const name = localStorage.getItem('@bethehero/ngoName');
  const id = localStorage.getItem('@bethehero/ngoId');

  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadData() {

      const { data } = await api.get('/profile', {
        headers: {
          Authorization: id
        }
      });

      setIncidents(data);
    }
    loadData();
  }, []);

  async function handleDeleteIncident(incidentId) {
    try {
      await api.delete(`/incidents/${incidentId}`, {
        headers: {
          Authorization: id
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== incidentId));
    } catch (error) {
      toast.error('Something went wrong, please try again later.')
    } 
  }

  function handleLogOut() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Welcome, {name.trim()}!</span>

        <div>
          <Link className="button" to='/incidents/new'>Add incident</Link>
          <button type="button" onClick={handleLogOut}>
            <FiPower size={18} color="#e02041" />
          </button>
        </div>
      </header>

      <h1>Current incidents</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASE: </strong>
            <p>{incident.title}</p>
            <strong>DESCRIPTION: </strong>
            <p>{incident.description}</p>

            <strong>VALUE NEEDED: </strong>
            <p>{Intl.NumberFormat('en', { style: 'currency', currency: 'CAD'}).format(incident.value)}</p>

            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20}  color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
