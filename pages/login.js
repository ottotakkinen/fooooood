import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/UI/Button';
import MainContainer from '../components/UI/MainContainer';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
  };
  return (
    <MainContainer>
      <NavBar />

      <Link href="/api/auth/signin">Login via Google</Link>
    </MainContainer>
  );
};

export default Login;
