import React from 'react';
import ReactDOM from 'react-dom';

let AdCenterContent = props => (
  <div id="adCenterList">
    { props.businesses.map(business => <adItem biz={business} />)} 
  </div>
);
