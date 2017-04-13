import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { Router, Route, browserHistory } from 'react-router';
import MoviesListWithData from './components/Movies';
import NewMovieWithData from './components/NewMovie';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql/query'
});


networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};  // Create the header object if needed.
        }
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('token');
        req.options.headers.authorization = token ? `${token}` : null;
        next();
    }
}]);

const client = new ApolloClient({
    networkInterface
});

// console.log(localStorage.getItem('token'))
if(localStorage.getItem('token') == null){
    browserHistory.push('/signin');
} else {
    browserHistory.push('/movies');
}

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="movies(/:movieId)" name="movies" component={MoviesListWithData}></Route>
                <Route path="newMovie" name="newMovie" component={NewMovieWithData}></Route>
            </Route>
            <Route path="/signin" component={SignIn}>
            </Route>
            <Route path="/signup" component={SignUp}>
            </Route>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);
