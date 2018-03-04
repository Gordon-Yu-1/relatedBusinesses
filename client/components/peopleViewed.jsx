import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adList.css';

const PeopleViewed = props => (
  <div id="peopleViewedList">
    { props.businesses.map(business => <h3 className={style.adList}>NON-AD ITEM HERE </h3>)}
  </div>
);

PeopleViewed.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

PeopleViewed.defaultProps = {
  businesses: [],
};

export default PeopleViewed;