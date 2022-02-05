import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import MainContainer from '../components/UI/MainContainer';
import NavBar from '../components/NavBar';
import Button from '../components/UI/Button';
import { useAuth } from '../providers/auth';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signup(emailRef.current.value, passwordRef.current.value);
    if (res === 'success') {
      setError('');
      router.push('/');
    } else if (res === 'auth/email-already-in-use') {
      setError('Email already in use.');
    } else if (res === 'auth/weak-password') {
      setError('Password must be at least 6 characters long.');
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
        <h2 className="text-2xl font-bold">Sign up</h2>
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
        <Button loading={loading}>Sign up</Button>
      </form>
    </MainContainer>
  );
};

export default SignUp;
