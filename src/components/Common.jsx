import React from 'react';
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
      <section id="header" className="d-flex align-items-center"> 
        <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row pt-10">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    {/* <br/><br/> */}
                    <h1 className="mt-4"> {props.name}
                      <br/>
                      <strong className="brand-name"> CodeKaro.Com</strong>
                    </h1>
                    <h4 className="my-4">
                      We are the team of talented developer making apps using ReactJS.
                    </h4>
                    {/* <br/><br/> */}
                    <div className="my-4 text-center">
                        <NavLink to={props.visit} className="btn btn-get-started">{props.btnName}</NavLink>
                    </div>
                  </div>
                  {/* <br/><br/> */}
                  <div className="col-md-6 order-1 order-lg-2 header-img ">
                    <img src={props.imgsrc} className="img-fluid animated" alt="Home" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
  );
}

export default Common;
