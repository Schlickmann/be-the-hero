import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Container, Content, InputGroup } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    try {
      const data = {
        name,
        email,
        whatsapp,
        city,
        state,
        country
      }
  
      const response = await api.post('/ngos', data);
      toast.success(`Yupiii, your access ID is ready: ${response.data.id}`);

      history.push('/');

    } catch (error) {
      const message = error.response ? error.response.data.error : 'Something went wrong, please try again later.';
      toast.error(message);
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero"/>
          <h1>Register</h1>
          <p>Create an account, login into the platform and help people to find the cases of your NGO.</p>
          <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02041" /> Already have an account</Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="NGO's name" 
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="Whatsapp" 
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            required
          />
          
          <InputGroup>
            <input 
              type="text" 
              placeholder="City" 
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={state}
              onChange={(event) => setState(event.target.value)}
              required
            />
          </InputGroup>
          <input 
            type="text" 
            placeholder="Country" 
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />

          <button className="button" type="submit">
            Register
          </button>
        </form>
      </Content>
    </Container>
  )
}
