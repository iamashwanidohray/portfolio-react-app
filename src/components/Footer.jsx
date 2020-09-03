import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        
        <footer class="page-footer font-small">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <NavLink to="/home"> CodeKaro.com</NavLink>
            </div>
        </footer>
    );
}

export default Footer;
