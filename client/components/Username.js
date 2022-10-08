import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { GlobalContext } from '../context/GlobalState';

const Username = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);
  const { getUser } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const userId = cookies.user_id;

  useEffect(() => {
    console.log('useEffect');
    async function userFind() {
      console.log('inside userFind');
      const user = await getUser(userId);
      console.log('user', user);
      setName(user);
    }
    userFind();
  }, []);
  console.log('name', name);

  return <>{name}</>;
};

export default Username;
