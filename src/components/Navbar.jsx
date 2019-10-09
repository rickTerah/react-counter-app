import React, { Component } from 'react';
const NavBar = (props) => { 
        return (  
            <React.Fragment>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <h2 className="nav-link active">Navbar</h2>
                        <span 
                        className="badge badge-pill badge-secondary m-"
                        >{props.totalCounter}</span>
                    </li>
                </ul>
            </React.Fragment>
        );
}
 
export default NavBar;