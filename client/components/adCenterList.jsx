import React from 'react';
import style from './styles/adList.css';

let AdCenterList = props => (
  <div id="adCenterList">
    { props.businesses.map(business => <adItem biz={business} />)} 
  </div>
);
