import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adList.css';

const AdSideList = props => (
  <div id="adSideList">
    { props.businesses.map(business => <h3 className={style.adList}>AD ITEM HERE </h3>)}
  </div>
);

AdSideList.propTypes = {
  businesses: PropTypes.arrayOf(PropTypes.object),
};

AdSideList.defaultProps = {
  businesses: [],
};

export default AdSideList;