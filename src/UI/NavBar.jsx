import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import './NavBar.css';

const NavBar = () => {

    return(
        <div className="container-fluid nav_bg">
                <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        {/* <NavLink className="navbar-brand brand" to="/home">CodeKaro.Com</NavLink> */}
                        <NavLink className="navbar-brand brand" to="/home">
                            <img src={ Logo } alt="Logo"/>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                <NavLink activeClassName="menuActive" className="navLink" to="/home">Home</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeClassName="menuActive" className="navLink" to="/services">Services</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink activeClassName="menuActive" className="navLink" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menuActive" className="navLink" to="/about">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}

export default NavBar;
