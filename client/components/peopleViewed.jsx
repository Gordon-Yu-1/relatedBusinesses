import React from 'react';
import style from './styles/adList.css';

let PeopleViewed = props => (
  <div id="peopleViewedList">
    { props.businesses.map(business => <nonAdItem biz={business} />)}
  </div>
);