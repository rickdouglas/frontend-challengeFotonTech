import {useHistory} from 'react-router-dom';
import '../styles/login.scss'
import {Button} from '../components/Button'
import {useAuth} from '../hooks/useAuth'
import googleImg from '../assets/google-icon.svg';
import { useEffect } from 'react';

export function Login (){
  const history = useHistory();
  const {user,signInWithGoogle} = useAuth();
  
  async function handleLogin(){
    if(!user) { // se o usuario nao estiver logado chama o metodo de autenticação
      await signInWithGoogle();
    }
      history.push('/home');
  }

  return (
    <>
      <div className='login'>
        <h2>Google Books API</h2>
        <Button onClick={handleLogin}>
          <img src={googleImg} alt='Logo do google'/>
          Faça login usando sua conta Google
        </Button>
      </div>
    </>
  );

}