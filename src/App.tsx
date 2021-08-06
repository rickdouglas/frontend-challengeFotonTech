import {BrowserRouter, Route} from 'react-router-dom';
import {Login} from './pages/Login';
import {Header} from './components/Header'
import {CardList} from './components/CardList'
import { AuthContextProvider } from './contexts/AuthContext';
import {BookContextProvider} from './contexts/BookContext';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <BookContextProvider>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Header} />
          <Route path='/home/books' component={CardList} />
        </BookContextProvider>
      </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
