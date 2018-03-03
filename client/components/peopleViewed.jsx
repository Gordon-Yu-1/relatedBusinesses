import React from 'react';
import ReactDOM from 'react-dom';

let PeopleViewed = props => (
  <div id="peopleViewedList">
    { props.businesses.map(business => <nonAdItem biz={business} />)}
  </div>
);