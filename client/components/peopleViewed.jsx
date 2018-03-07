import React from 'react';
import PropTypes from 'prop-types';
import NonAdItem from './nonAdItem';
import style from './styles/adList.css';

const PeopleViewed = props => (
  <div className={style.adList}>
    { props.businesses.map(business => <li className={style.listEntry}>a<NonAdItem biz={business} /></li>)}
  </div>
);

PeopleViewed.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

PeopleViewed.defaultProps = {
  businesses: [],
};

export default PeopleViewed;