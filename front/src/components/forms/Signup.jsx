import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const navigate = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError(`Passwords do not match!`);

    try {
      setError('');
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    }
    catch (error) { setError('Failed to create account.') }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='w-100 text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type='email' ref={emailRef} required placeholder='Email' />
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type='password' ref={passwordRef} required placeholder='Password' />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Control type='password' ref={passwordConfirmRef} required placeholder='Confirm Password' />
            </Form.Group>
            <Button 
              disabled={loading}
              type='submit'
              className='w-100 mt-3'> Sign Up </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center mt-2 mb-4'>
          Already have an account? <Link to='/login'> Log In </Link>
        </div>
      </Card>
    </>
  );
};

export default Signup;
