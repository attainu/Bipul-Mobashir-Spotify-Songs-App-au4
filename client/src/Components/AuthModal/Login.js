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
        setLogin: dispatch
    }
}
export default connect(getData,getFunction)(class Login extends Component {
    
    state = {
        email: "",
        password: "",
        status: true,
        type: "password"
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
    
    handleShowPassword = () => {
        this.setState({
            type: "text",
            status : false
        })
    }
    
    handleHidePassword = () => {
        this.setState({
            type: "password",
            status : true
        })
    }
    
    loginHandler = () =>{
        const { email, password } = this.state;
        
        const user = {
            email,
            password,
        };
        axios({
            method: 'POST',
            url: 'http://localhost:5555/user/login',
            data: user
        })
        .then((response) => {
            //handle success
            if(response.data.status === 200 && response.data.message=== "success"){
                let action = {
                    type: "set_signup",
                    payload : {
                        name: response.data.name,
                        auth: response.headers["auth-token"]
                    }   
                }
                this.props.setLogin(action);
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
            {this.props.status.loginPage && <div className="login">
            <div className="loginHeader">
            <div className="loginTab">SignIn</div>
            <div onClick={this.handleTab} className="signUpTab">SignUp</div>
            </div>
            <div className="authBody">
            <input onChange = {(e) => {this.handleEmailChange(e)}} type="email" value={this.state.email} placeholder="Enter Email"></input>
            <input onChange = {(e) => {this.handlePasswordChange(e)}} type={this.state.type} value={this.state.password} placeholder="Enter Password"></input>
            {this.state.status && <button onClick = {() => {this.handleShowPassword()}}>Show</button>}
            {!this.state.status && <button onClick = {() => {this.handleHidePassword()}}>Hide</button>}
            </div>
            <div className="authButton">
            <button onClick={() => {this.loginHandler()}}>Login</button>
            </div>
            
            </div> }
            </Fragment>
            
            )
        }
    })
    