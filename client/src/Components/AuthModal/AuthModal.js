import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import Login from './Login';
import Signup from './Signup';
let getData = (store)=>{
    return {
        status:store.auth,
        message: store.errorHandler,
    }
}
let getFunction = (dispatch)=>{
 return{
    cross:dispatch
 }
}
export default connect(getData,getFunction)(class AuthModal extends Component {
    handleCross = ()=>{
        let action = {
            type:"set_status"
        }
        this.props.cross(action);
    }
    render() {
        return (
            <Fragment>
            {this.props.status.login && 
            <div className="authModal">
               <i onClick={()=>{this.handleCross()}} className="fas fa-times cross"></i>
                <div className="auth">
                <Login/>
                <Signup/>
                
                </div>
                {this.props.message.status && <div className="errorModalPopup">
                    <div className="error">
                    <span className="errorMessage">{this.props.message.message}</span>
                    </div>
                </div>}
            </div>}
            </Fragment>
        )
    }
})
