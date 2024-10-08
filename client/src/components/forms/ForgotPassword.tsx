import React, { FC, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Form,
  Card,
  Button,
  Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword: FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(false);

      // @ts-ignore
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
      navigate('/');
    } catch (error) { setError('Failed to reset password.') }
    setLoading(false);
  };

  const windowWidth: boolean = window.innerWidth < 850;

  return (
    <div className='h-100 p-4 bg-white'>
      <Card className='h-100 d-flex align-items-center'>
        <Card.Body className='d-flex flex-column justify-content-center'>
          {windowWidth && <Title>ESP<br />ERI</Title>}
          <br /><br />
          <h2 className='w-100 text-center mb-4'>Reset Password</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          {message && <Alert variant='success'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              {/* @ts-ignore */}
              <Form.Control type='email' ref={emailRef} required placeholder='Email'/>
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-3 border-0' style={{backgroundColor: '#699897'}}>Reset Password</Button>
          </Form>

          <div className='w-100 text-center mt-3'>
            Need an account? <Link className='text-decoration-none' to='/login' style={{color: '#699897'}}>Sign Up</Link> or <Link className='text-decoration-none' to='/login' style={{color: '#699897'}}>Retry Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

const Title = styled.h2`
  font-family: Bagnard;
  text-align: center;
  font-size: 4rem;
  line-height: 3rem;
`;

export default ForgotPassword;
