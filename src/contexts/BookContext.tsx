import axios from 'axios'
import { useEffect } from 'react';
import { FormEvent, ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";
import { useHistory } from 'react-router-dom';

type Book = {
  id: string,
  volumeInfo: VolumeInfo
}
type ImageLinks ={
  thumbnail:string,
  smallThumbnail:string,
}
type VolumeInfo ={
  title: string,
  description: string,
  imageLinks: ImageLinks
} 
type BookContextType ={
  book: Book | undefined,
  booksData: Book[],
  handleSubmit: (event:FormEvent) => void,
  handleSetSearch: (event: FormEvent<HTMLInputElement>) => void,
  setSearchField: Dispatch<SetStateAction<String>>
  searchField:String | string
}

type BookContextProviderProps ={
  children : ReactNode;
}
export const BookContext = createContext({} as BookContextType);

export function BookContextProvider(props:BookContextProviderProps){
  const [booksData, setBooksData] = useState<Book[]>([])
  const [book, setBook] = useState<Book>();
  const [searchField, setSearchField] = useState<String>('');

  const history = useHistory();

   function handleSubmit(event:FormEvent) {
    event.preventDefault()
    const getBooks = async () => {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchField}&key=&maxResults=10`)
      console.log(result.data.items)
      setBooksData(result.data.items)
    }
    getBooks()
    history.push('/home/books')

  }
  function handleSetSearch(event:FormEvent<HTMLInputElement>) {
    event.preventDefault()
    setSearchField(event.currentTarget.value)
  }

  return (
    <BookContext.Provider
     value={{book,
             handleSubmit,
             handleSetSearch,
             searchField,
             setSearchField,
             booksData,
      }}>
      {props.children}
    </BookContext.Provider>

  );
}