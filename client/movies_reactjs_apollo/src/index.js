import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Router, Route, browserHistory } from 'react-router';
import MoviesListWithData from './components/Movies';
import NewMovieWithData from './components/NewMovie'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3000/graphql/query',
    })
});

browserHistory.push('/movies');

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="movies(/:movieId)" name="movies" component={MoviesListWithData}></Route>
                <Route path="newMovie" name="newMovie" component={NewMovieWithData}></Route>
            </Route>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);
