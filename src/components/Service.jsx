import React from 'react';
import Card from '../UI/Card';
// import ServiceImage from '../images/services.svg';
// import Transaction from '../images/transactions.svg';
import { subjects } from './SDImage';

function Service() {
  return (
    <>
      <div className="my-5 services">
        <h1 className="mt-4"> Get our Services at<strong className="brand-name"> CodeKaro.Com</strong>
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {
                subjects.map((subject, index) => {
                  return <Card key={index} imagePath={subject.imgSrc} title={subject.title} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
