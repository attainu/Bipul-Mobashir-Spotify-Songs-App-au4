import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import Login from './Login';
import Signup from './Signup';
let getData = (store)=>{
    return {
        status:store.auth
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
               <div onClick={()=>{this.handleCross()}} className="cross">X</div>
                <div className="auth">
                <Login/>
                <Signup/>
                </div>

            </div>}
            </Fragment>
        )
    }
})
