import React from 'react';
import style from './styles/adList.css';

let AdSideList = props => (
  <div id="adSideList">
    <h2>adSideList</h2>
    { props.businesses.map(business => <adItem biz={business} />)}
  </div>
);