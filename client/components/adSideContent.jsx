import React from 'react';
import ReactDOM from 'react-dom';

let AdSideContent = props => (
  <div id="adSideList">
    { props.businesses.map(business => <adItem biz={business} />)}
  </div>
);