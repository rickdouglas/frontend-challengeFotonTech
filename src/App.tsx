import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import { AuthContextProvider } from './contexts/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' exact component={Login} />
        <Route path='/home' component={Home} />
      </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
