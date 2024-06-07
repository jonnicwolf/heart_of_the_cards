import React from 'react';
import styled from 'styled-components';
import { Form, Card, Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form>
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
            <Button type='submit'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>Already have an account? Log In Link</div>
    </>
  )
}

const Container = styled.div``;


export default Signup;
