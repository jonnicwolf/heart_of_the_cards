import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const {
    login,
    signInWithGoogle,
    signInWithAnon
  } = useAuth();
  const navigate = useNavigate();

  function handleSubmit (e) {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
    navigate('/');
    setLoading(false);
  };

  const windowWidth = window.innerWidth < 850;

  return (
    <div className='h-100 p-4 bg-white'>
      <Card className='h-100 d-flex align-items-center'>
        <Card.Body className='d-flex flex-column justify-content-center'>
          {windowWidth && <Title>SECRETS <br /> of the  <br /> CARTOMANCER</Title>}
          <br /><br />
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
            <Button disabled={loading} type='submit' className='w-100 mt-3 border-0' style={{backgroundColor: '#699897'}}>Log In</Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            Forgot your password? <Link className='text-decoration-none' to='/forgot-password' style={{color: '#699897'}}>Click here</Link>
          </div>
          <div className='w-100 text-center mt-2 mb-4'>
            Need an account? <Link className='text-decoration-none' to='/signup' style={{color: '#699897'}}> Sign Up now </Link>
          </div>
          <Button disabled={loading} type='button' className='w-100 mt-3 border-1 border-black bg-white p-2' onClick={signInWithGoogle}>
            <Wrapper>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
              <span> Sign In With Google </span>
            </Wrapper>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Title = styled.h2`
  font-family: Bagnard;
  text-align: center;
  font-size: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: black;
`;



export default Login;
