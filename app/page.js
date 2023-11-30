'use client'

import { useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState';
import authService from '../services/auth.service';
import { jwtDecode } from "jwt-decode";
import Link from 'next/link';

export default function Home() {
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
          type: 'SET_USER',
          payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT_USER' });
    router.push('/');
  };

  return (
    <div className="text-red-500">
      <div className='text-4xl text-yellow-300 italic'>WELCOME TO RIPPLE AI</div>

      {state.user ? (
            <li className="nav-item">
              <Link href="/" className='' onClick={handleLogout}>Logout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/login">Login</Link>
            </li>
          )}
    </div>
  )
}
