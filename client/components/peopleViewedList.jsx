import React from 'react';
import PropTypes from 'prop-types';
import NonAdItem from './nonAdItem';
import style from './styles/adList.css';

const PeopleViewedList = props => (
  <div className={style.adList}>
    { props.businesses.map(business => <li className={style.listEntry}><NonAdItem biz={business} /></li>)}
  </div>
);

PeopleViewedList.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

PeopleViewedList.defaultProps = {
  businesses: [],
};

export default PeopleViewedList;