import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function NewIncident() {
  const id = localStorage.getItem('@bethehero/ngoId');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post('/incidents', { title, description, value: amount }, {
        headers: {
          Authorization: id,
        }
      });

      toast.success('Incident added successfully');
      history.push('/profile');
    } catch (error) {
      toast.error('Something went wrong, please try again later')
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero"/>
          <h1>Add new incident</h1>
          <p>Please, detail the case in order to find a Hero(es) to help you solve it.</p>
          <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#e02041" /> Back to home</Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />
          <textarea 
            placeholder="Description" 
            value={description}
            onChange={event => setDescription(event.target.value)}
            required
          />
          <input 
            type="number" 
            placeholder="Value needed" 
            value={amount}
            onChange={event => setAmount(event.target.value)}
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
