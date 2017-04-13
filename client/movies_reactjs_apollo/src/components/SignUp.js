/**
 * Created by mdeket on 4/6/17.
 */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { browserHistory } from 'react-router';
import request from 'superagent';
import { Link } from 'react-router';

class SignUp extends Component {
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
        let password_confirmation = this.refs.password_confirmation.value;
        if(password === '') {
            alert("You must enter password!");
            return;
        }
        if(password_confirmation === '') {
            alert("You must enter password confirmation!");
            return;
        }
        if(password !== password_confirmation) {
            alert("Password and Password Confirmation must be the same!");
            return;
        }

        let variables = {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }

        request
            .post('http://localhost:3000/users')
            .send({user: variables})
            .set('Accept', 'application/json')
            .end(function(err, res){
                    if(res.statusCode == 201){
                        alert("Check email to activate your account.");
                        browserHistory.push('/signin');
                    } else {
                        alert(res.body.errors[0]);
                    }
            });
    }

    render() {
        return (
            <div className="row" style={{margin: "20px"}}>
                <div className="col-md-3">
                    <h2>SignUp</h2>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="formGroup">
                            <label>Email</label>
                            <input className="form-control" type="text" ref="email" />
                        </div>
                        <div className="formGroup">
                            <label>Password</label>
                            <input className="form-control" type="password" ref="password" />
                        </div>
                        <div className="formGroup">
                            <label>Password Confirmation</label>
                            <input className="form-control" type="password" ref="password_confirmation" />
                        </div>
                        <br/>
                        <button className="btn btn-default" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;