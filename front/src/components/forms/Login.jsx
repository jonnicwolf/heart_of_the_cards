import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(false);

      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) { setError('Failed to sign in.') };
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='w-100 text-center mb-4'>Log In</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type='email' ref={emailRef} required placeholder='Email' />
            </Form.Group>
            <Form.Group id="password">
              
              <Form.Control type='password' ref={passwordRef} required placeholder='Password' />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-3'>Log In</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to='/forget-password'>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2 mb-4'>
        Need an account? <Link to='/signup'> Sign Up </Link>
      </div>
    </>
  );
};

export default Login;
