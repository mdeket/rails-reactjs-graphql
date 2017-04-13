/**
 * Created by mdeket on 4/6/17.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import request from 'superagent';
import { Link } from 'react-router';

class SignIn extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let email = this.refs.email.value;
        if(email === '') {
            alert("You must enter email!");
            return;
        }

        let password = this.refs.password.value;
        if(password === '') {
            alert("You must enter email!");
            return;
        }

        let variables = {
            email: email,
            password: password
        }

        request
            .post('http://localhost:3000/users/login')
            .send(variables)
            .set('Accept', 'application/json')
            .end(function(err, res){
                if(res.statusCode == 400){
                    alert(res.body.error)
                } else if(res.statusCode == 401) {
                    alert(res.body.error)
                } else if(res.statusCode == 200) {
                    alert("Signed in!")
                    localStorage.setItem('token', res.body.auth_token);
                    browserHistory.push('/movies');
                } else {
                    alert("Something went wrong!");
                    console.log(err);
                    console.log(res);
                }
            });
    }

    render() {
        return (
            <div className="row" style={{margin: "20px"}}>
                <div className="col-md-3">
                    <h2>Sing In</h2>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="formGroup">
                            <label>Email</label>
                            <input className="form-control" type="text" ref="email" />
                        </div>
                        <div className="formGroup">
                            <label>Password</label>
                            <input className="form-control" type="password" ref="password" />
                        </div>
                        <br/>

                        <button className="btn btn-default" type='submit' style={{marginRight:'30px'}}>Sign In</button>
                        <Link className="btn btn-primary" to="signup">Sign Up</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;