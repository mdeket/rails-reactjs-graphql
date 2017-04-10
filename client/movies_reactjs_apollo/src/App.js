import React, { Component } from 'react';
import logo from '../public/stack.png';
import './App.css';
import { Link } from 'react-router';
import { Nav, NavItem, Table } from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="movies">Movies</Link></li>
                                <li><Link to="newMovie">New Movie</Link></li>
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
