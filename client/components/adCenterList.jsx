import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adList.css';

const AdCenterList = props => (
  <div id="adCenterList">
    { props.businesses.map(business => <h3 className={style.adList}>AD ITEM HERE </h3>)} 
  </div>
);

AdCenterList.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

AdCenterList.defaultProps = {
  businesses: [],
};

export default AdCenterList;
