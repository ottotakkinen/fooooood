import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/UI/Button';
import MainContainer from '../components/UI/MainContainer';

const Login = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <MainContainer>
      <NavBar />
      <form
        onSubmit={submit}
        className="flex flex-col gap-4 max-w-lg w-full p-8 mx-10 bg-zinc-50 rounded-xl"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          className="py-2 px-4 rounded-full"
          name="email"
          id="email"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="py-2 px-4 rounded-full"
          name="password"
          id="password"
          type="password"
        />
        <Button>Login</Button>
      </form>
    </MainContainer>
  );
};

export default Login;
