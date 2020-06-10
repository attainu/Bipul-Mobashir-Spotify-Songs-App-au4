import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

let getData = (store)=>{
    return {
        status:store.auth
    }
}
let getFunction = (dispatch)=>{
    return{
        tab:dispatch,
        setSignup: dispatch,
        errorMessage: dispatch,
        hideMessage: dispatch
    }
}
export default connect(getData,getFunction)(class SignUp extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
        errorStatus: true
    }
    
    handleNameChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handleUsernameChange = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    
    signupHandler = () => {

        const { name, username, email, password } = this.state;
        
        const user = {
            name,
            username,
            email,
            password,
        };
        axios({
            method: 'POST',
            url: 'https://server-musicme.herokuapp.com/user/register',
            data: user
        })
        .then((response) => {
            //handle success
            if(response.data.status === 200 && response.data.message=== "success"){
                let action = {
                    type: "set_signup",
                    payload : {
                        name: response.data.name,
                        auth: response.headers["auth-token"],
                    }   
                }
                this.props.setSignup(action);
            }
            if(response.data.status === 400){    
                let action = {
                    type: "set_error_message",
                    payload: response.data.message 
                }
                this.props.errorMessage(action)

                setTimeout(() => {
                    let action = {
                        type: "set_hide_error_message",
                    }
                    this.props.hideMessage(action)
                }, 2000);
            }
        })
        
        .catch((response) => {
            //handle error
            console.log(response);
        });
    }
    
    
    handleTab = ()=>{
        let action = {
            type:"set_tab"
        }
        this.props.tab(action);
        
    }
    
    render() {
        
        return (
            <Fragment>
            {this.props.status.signUpPage && <div className="login">
            <div className="loginHeader">
            <div onClick={this.handleTab} className="loginTab">SignIn</div>
            <div onClick={this.handleTab} className="signUpTab">SignUp</div>
            </div>
            
            <div className="authBody">
            <input onChange = {(e) => {this.handleNameChange(e)}} type="text" value={this.state.name} placeholder="Name"></input>
            <input onChange = {(e) => {this.handleUsernameChange(e)}} type="text" value={this.state.username} placeholder="Username"></input>
            <input onChange = {(e) => {this.handleEmailChange(e)}} type="email" value={this.state.email} placeholder="Email"></input>
            <input onChange = {(e) => {this.handlePasswordChange(e)}} type="password" value={this.state.password} placeholder="Password"></input>
            </div>
            <div className="authButton">
            <button onClick={() => {this.signupHandler()}}>Sign Up</button>
            </div>
            </div>}
            </Fragment>
            
            )
        }
    })
    