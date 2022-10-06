import Landing from './pages/Landing';
import Home from './pages/Home';
import Battle from './pages/Battle';
import Cards from './pages/Snippets';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Home';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflox-x: hidden;
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/battle' element={<Battle />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
