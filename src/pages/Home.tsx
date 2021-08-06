import { useAuth } from '../hooks/useAuth';
import {Header} from '../components/Header';
import { CardList } from '../components/CardList';
import '../styles/home.scss';
import { useEffect } from 'react';

export function Home(){
  return(
    <>
     <Header />
    </>
  );
}