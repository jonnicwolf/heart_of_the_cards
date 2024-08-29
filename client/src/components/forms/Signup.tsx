import React, { FC, FormEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Form,
  Card,
  Button,
  Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Signup: FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const passwordConfirmRef = useRef<HTMLInputElement>();

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // @ts-ignore
    if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError(`Passwords do not match!`);

    try {
      setError('');
      setLoading(true);
      // @ts-ignore
      const signupSucess = await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');

      return signupSucess;
    } catch (error) { setError('Failed to create account.') }
    setLoading(false);
  };

  const windowWidth: boolean = window.innerWidth < 850;

  return (
    <div className='h-100 p-4 bg-white'>
      <Card className='h-100 d-flex align-items-center'>
        <Card.Body className='d-flex flex-column justify-content-center'>
          {windowWidth && <Title>ESP<br />ERI</Title>}
          <svg className='align-self-center' xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>
          <h2 className='w-100 text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert> }
          {/* @ts-ignore */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className='mb-3'>
              {/* @ts-ignore */}
              <Form.Control type='email' ref={emailRef} required placeholder='Email' />
            </Form.Group>
            <Form.Group id="password" className='mb-3'>
              {/* @ts-ignore */}
              <Form.Control type='password' ref={passwordRef} required placeholder='Password' />
            </Form.Group>
            <Form.Group id="password-confirm" className='mb-3'>
              {/* @ts-ignore */}
              <Form.Control type='password' ref={passwordConfirmRef} required placeholder='Confirm Password' />
            </Form.Group>
              <Button disabled={loading} type='submit' className='w-100 mt-3 border-0' style={{backgroundColor: '#699897'}}>Sign Up</Button>
          </Form>
        </Card.Body>
        <div className='w-100 text-center mt-2 mb-4'>
          Already have an account? <Link to='/login' className='text-decoration-none' style={{color: '#699897'}}> Log In </Link>
        </div>
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

export default Signup;
