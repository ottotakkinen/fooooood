import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/UI/Button';
import MainContainer from '../components/UI/MainContainer';
import { useAuth } from '../providers/auth';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await login(emailRef.current.value, passwordRef.current.value);
    if (res === 'success') {
      setError('');
      router.push('/');
    } else if (res === 'auth/wrong-password') {
      setError('Wrong password.');
    } else if (res === 'auth/user-not-found') {
      setError('User not found.');
    } else {
      setError('Something weird went wrong.');
    }
    setLoading(false);
  };
  return (
    <MainContainer>
      <NavBar />
      <form
        onSubmit={submit}
        className="flex flex-col gap-4 max-w-lg w-full p-8 mx-10 bg-zinc-50 rounded-xl"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        {error && <p className="text-red-600">{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          className="py-2 px-4 rounded-full"
          name="email"
          id="email"
          type="email"
          ref={emailRef}
        />
        <label htmlFor="password">Password</label>
        <input
          className="py-2 px-4 rounded-full"
          name="password"
          id="password"
          type="password"
          ref={passwordRef}
        />
        <Button loading={loading}>Login</Button>
      </form>
    </MainContainer>
  );
};

export default Login;
