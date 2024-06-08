import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
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
    <div className='h-100 p-4 bg-white'>
      <Card className='h-100 d-flex align-items-center'>
        <Card.Body className='d-flex flex-column justify-content-center'>
          <h2 className='w-100 text-center mb-4'>Reset Password</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          {message && <Alert variant='success'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type='email' ref={emailRef} required placeholder='Email'/>
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-3'>Reset Password</Button>
          </Form>

          <div className='w-100 text-center mt-3'>
            Need an account? <Link className='text-decoration-none' to='/login'>Sign Up</Link> or <Link className='text-decoration-none' to='/login'>Retry Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPassword;
