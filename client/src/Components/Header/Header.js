import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import {connect} from 'react-redux';

let getData = (store)=>{
    console.log("login store",store.auth);
    return {
        status:store.auth
    }
}
let getFunction = (dispatch)=>{
 return{
    modal:dispatch,
    logout: dispatch
 }
}

export default connect(getData,getFunction)(class Header extends Component {
    handleLoginButton = ()=>{
        let action = {
            type:"set_status"
        }
        this.props.modal(action);
    }

    handleLogoutButton = () => {
        let action = {
            type: "set_logout"
        }
        this.props.logout(action);
    }


    render() {
        return (
            <header>
                <div className="brand">
                    <img src="https://res.cloudinary.com/dbbphbyf8/image/upload/v1586360806/Music_dpsg1v.svg"/>
                </div>
                <div className="search"><Search/></div>
                
                {this.props.status.auth && <div className="userAuth" onClick={()=>{this.handleLogoutButton()}}>logout</div>}
                {!this.props.status.auth && <div className="userAuth" onClick={()=>{this.handleLoginButton()}}>login/signup</div>}

                
            </header>
        )
    }
})
