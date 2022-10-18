import RootLayout from "./pages/RootLayout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Battle, { loader as cardLoader } from "./pages/Battle";
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
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

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

const router = createBrowserRouter(createRoutesFromElements(      
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/code" element={<Code />} />
    <Route path="/battle" element={<Battle />} loader={cardLoader} />
    <Route path="/creation" element={<Creation />} />
  </Route>
));

function App() {

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
