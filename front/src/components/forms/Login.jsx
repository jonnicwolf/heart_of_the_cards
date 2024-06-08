import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className='h-100 p-4 bg-white'>
      <Card className='h-100 d-flex align-items-center border border-info'>
        <Card.Body className='d-flex flex-column justify-content-center'>
        <svg className='align-self-center' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>
          <h2 className='w-100 text-center mb-4'>Login to your account </h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className='mb-3'>
              <Form.Control type='email' ref={emailRef} required placeholder='Email' />
            </Form.Group>
            <Form.Group id="password" className='mb-3'>
              <Form.Control type='password' ref={passwordRef} required placeholder='Password' />
            </Form.Group>
            <Button disabled={loading} type='submit' className='w-100 mt-3'>Log In</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            Forgot your password? <Link className='text-decoration-none' to='/forgot-password'>Click here</Link>
          </div>
          <div className='w-100 text-center mt-2 mb-4'>
            Need an account? <Link className='text-decoration-none' to='/signup'> Sign Up now </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
