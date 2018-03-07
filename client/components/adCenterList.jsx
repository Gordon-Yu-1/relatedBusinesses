import React from 'react';
import PropTypes from 'prop-types';
import AdItem from './adItem';
import style from './styles/adList.css';

const AdCenterList = props => (
  <div className={style.adList}>
    { props.businesses.map(business => <li className={style.listEntry}>a<AdItem biz={business} /></li>)}
  </div>
);

AdCenterList.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

AdCenterList.defaultProps = {
  businesses: [],
};

export default AdCenterList;
