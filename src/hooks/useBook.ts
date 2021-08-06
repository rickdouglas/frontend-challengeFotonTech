import {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

export function useBook(){
  const value = useContext(BookContext);
  return value;
}