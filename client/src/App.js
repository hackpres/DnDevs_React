import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import Code from "./pages/Snippets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Home";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Creation from "./pages/CharacterCreation";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

function App() {

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/code" element={<Code />} />
        <Route exact path="/battle" element={<Battle />} />
        <Route exact path="/creation" element={<Creation />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
