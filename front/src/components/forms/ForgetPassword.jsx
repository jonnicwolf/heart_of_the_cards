import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault()
    try {
      setMessage('');
      setError('');
      setLoading(false);

      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
      navigate('/');
    } catch (error) { setError('Failed to reset password.') }
    setLoading(false);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2 className='w-100 text-center mb-4'>Reset Password</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          {message && <Alert variant='success'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-3'>Reset Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid black;
`;

export default ForgotPassword;
