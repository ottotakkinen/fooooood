import { useRouter } from 'next/router';
import React from 'react';

const Logout = () => {
  const router = useRouter();
  const logUserOut = async () => {
    console.log('logging out');
    // const res = await logout();
    // console.log(res);
    router.push('/');
  };
  logUserOut();
  return <div>Logout</div>;
};

export default Logout;
