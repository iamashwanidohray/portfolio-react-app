import React from 'react';
import { NavLink } from 'react-router-dom';
// import ServiceImage from '../images/services.svg';

const Card = props => {

    return(
        <div className="col-md-4 col-sm-6 col-xs-1 col-10 mx-auto mb-3">
            <div class="card">
                <img src={props.imagePath} class="card-img-top" alt="Services" />
                <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/contact" class="btn btn-get-started btn-read-more">Read</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Card;