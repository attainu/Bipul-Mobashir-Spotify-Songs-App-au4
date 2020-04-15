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
export default connect(getData,getFunction)(class SignUp extends Component {
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
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="password"></input>
                </div>
                <div className="authButton">
                    <button>Sign Up</button>
                </div>

            </div> }
            </Fragment>
            
        )
    }
})
