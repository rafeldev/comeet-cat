import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';

import { App } from './entries/App';

const client = new ApolloClient({
<<<<<<< HEAD
  uri: 'http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql',
=======
  uri: "https://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql",
>>>>>>> 91858a29120d897148816ea2f20e4b9823af7e37
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById('root')
);
