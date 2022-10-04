import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Battle from './components/Battle';
import Cards from './components/Cards';
import Login from './components/Login';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Shop from './components/Shop';

function App() {
  const [page, setPage] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
