import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../providers/auth';

const Logout = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const logUserOut = async () => {
    console.log('logging out');
    const res = await logout();
    console.log(res);
    router.push('/');
  };
  logUserOut();
  return <div>Logout</div>;
};

export default Logout;
