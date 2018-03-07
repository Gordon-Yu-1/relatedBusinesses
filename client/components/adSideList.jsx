import React from 'react';
import PropTypes from 'prop-types';
import AdItem from './adItem';
import style from './styles/adList.css';

const AdSideList = props => (
  <div className={style.adList}>
    { props.businesses.map(business => <li className={style.listEntry}>a<AdItem biz={business} /></li>)}
  </div>
);

AdSideList.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

AdSideList.defaultProps = {
  businesses: [],
};

export default AdSideList;
