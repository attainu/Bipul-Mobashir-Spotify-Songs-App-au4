import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

let getData = (store) => {
    return {
        status : store.auth
    }
}

let getFunction = (dispatch) => {
    return {
         dispatch
    }
}

export default connect(getData, getFunction)(class SideNav extends Component {
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
                   {this.props.status.auth && <NavLink
                    exact
                    activeClassName="navActive"
                    className="navbarLink"
                    to="/favourite"
                    >
                      Favourite
                    </NavLink>}
                     
                       
                   </nav>
               </div>
               <div>C</div>
               <div>D</div>
            </aside>
        )
    }
}
)
