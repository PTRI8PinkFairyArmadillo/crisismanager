import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Logout = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user_id']);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  removeCookie('user_id', { path: '/' });
  setTimeout(routeChange, 10)
};

export default Logout;
