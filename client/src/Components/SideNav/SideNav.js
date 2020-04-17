import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class SideNav extends Component {
    render() {
        return (
            <aside className="sideNav">
               <div className="hidden"></div>
               <div className="B">
                   <div className="musicTab">Music</div>
                   <nav>
                       <Link to = "/"><div>Home</div></Link>
                       <Link to = "/songs"><div>Songs</div></Link>
                       <div>Album</div>
                       <Link to = "/artist"><div>Artist</div></Link>
                       <div>Favourite</div>
                   </nav>
               </div>
               <div>C</div>
               <div>D</div>
            </aside>
        )
    }
}
