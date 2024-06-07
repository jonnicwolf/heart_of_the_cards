import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

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

    if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError(`Passwords do not match!`)

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } 
    catch (error) {setError('Failed to create account.')}

    setLoading(false)
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2 className='w-100 text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button 
              disabled={loading}
              type='submit'
              className='w-100'> Sign Up </Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center mt-2'>
          Already have an account? <Link to='/login'> Log In </Link>
        </div>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
`;


export default Signup;
