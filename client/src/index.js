import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
// const authLink = new ApolloLink((operation, forward) => {
//   operation.setContext(({ headers = {} }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('id_token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   })
//   return forward(operation);
// });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App /> 
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
