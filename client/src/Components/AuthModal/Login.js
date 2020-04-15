import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
let getData = (store)=>{
    console.log("login store",store)
    return {
        status:store.auth
    }
}
let getFunction = (dispatch)=>{
 return{
    tab:dispatch
 }
}
export default connect(getData,getFunction)(class Login extends Component {
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
                    <input type="text"></input>
                    <input type="password"></input>
                </div>
                <div className="authButton">
                    <button>Sign In</button>
                </div>

            </div> }
            </Fragment>
            
        )
    }
})
