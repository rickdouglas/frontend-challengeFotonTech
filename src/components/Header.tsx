import {FormEvent} from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import {useBook} from '../hooks/useBook';
import { useState } from 'react';
import { useEffect } from 'react';


type Book ={
  avatar:string,
  title:string,
  description:string,
  publishedDate:string
}

export function Header() {

  const {handleSubmit, handleSetSearch, searchField, setSearchField} = useBook();
  
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Front-End Web Challenge Google Books API</a>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={handleSetSearch} />
                
              <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
      </nav>
    </>
    
  );
}
