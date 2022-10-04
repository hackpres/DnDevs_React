import Landing from './pages/Landing'
import Battle from './pages/Battle';
import Cards from './pages/Snippets';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Home';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/battle' element={<Battle />} />
      </Routes>
    </>
  );
}

export default App;
