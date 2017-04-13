import React, { Component } from 'react';
import logo from '../public/stack.png';
import './App.css';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';


class App extends Component {
    componentWillMount(){
        if(localStorage.getItem('token') === null){
            browserHistory.push('/signin');
        }
    }
    logOut(){
        localStorage.removeItem('token', null);
        browserHistory.push('/signin');
    }
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="movies">Movies</Link></li>
                                <li><Link to="newMovie">New Movie</Link></li>
                                <li><a role="button" onClick={this.logOut.bind()}>Log Out</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="App-header">
                    <img src={logo} alt="logo" style={{height:"50%"}}/>
                    <h2>Welcome to React, Ruby on Rails & GraphQL</h2>
                </div>
                {this.props.children}
            </div>
    );
  }
}

export default App;
