import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import { Container, FormSection } from './styles';

export default function Logon() {
  const [id, setID] = useState('');

  const history = useHistory();

  async function handleLogon(event) {
    event.preventDefault();
  
    try {
      const { data } = await api.post('/sessions', { id });

      localStorage.setItem('@bethehero/ngoId', id);
      localStorage.setItem('@bethehero/ngoName', data.name);

      history.push('/profile');

    } catch (error) {
      const message = error.response ? error.response.data.error : 'Something went wrong, please try again later.';
      toast.error(message);
    }
  }

  return (
    <Container>
      <div>
        <FormSection>
          <img src={logo} alt="Be The Hero"/>
          <form onSubmit={handleLogon}>
            <h1>Login into the system</h1>

            <input 
              type="text" 
              placeholder="Type your ID" 
              value={id}
              onChange={event => setID(event.target.value)}
              required
            />
            <button className="button" type="submit">Sign In</button>
            
            <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02041" /> Create an Account</Link>
          </form>
        </FormSection> 
        <img src={heroes} alt="The Heroes"/>
      </div>
    </Container>
  );
}
