import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom';
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
export default connect(getData,getFunction)(class SideNav extends Component {

    setStyle = (value)=>{
        const style1 = {
            color: "white",
            backgroundColor: "DodgerBlue",
            
            fontFamily: "Arial"
        }
        const style2 = {
            color: "white",
            backgroundColor: "pink",
            
            fontFamily: "Arial"
        }
        console.log("style here",window.location.pathname);
        if(window.location.pathname = value){
            return style1
        }
        else return style2
    }
    componentDidMount = ()=>{
        console.log("cdm sidenav",this.props);
        
    }
     
    render() {
        
        
        return (
            <aside className="sideNav">
               <div className="hidden"></div>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/"
                    >
                      Home
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/songs"
                    >
                      Songs
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/album"
                    >
                      Album
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/artist"
                    >
                      Artist
                    </NavLink>
                   <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/favourite"
                    >
                      Favourite
                    </NavLink>
                     
                       
                   </nav>
               </div>
               <div>C</div>
               <div>D</div>
            </aside>
        )
    }
}
)