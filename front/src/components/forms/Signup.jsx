import React, { useState, useRef } from 'react';
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

  async function handleSubmit (e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError(`Passwords do not match!`)
    try {
      setError('')
      setLoading(false)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      setError('Failed to create account.')
    }
    setLoading(false)
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
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
            <Button disabled={loading} type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>Already have an account? Log In Link</div>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
`;


export default Signup;
