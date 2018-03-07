import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adStyle.css';

const NonAdItem = props => (
  <div>
    <div> One
      <img className={style.bizPic} src="http://www.academy-cube.com/wp-content/uploads/2015/05/iStock_000023732304_XXXLarge.jpg" alt="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Emotes-face-smile-icon.png" />
   
    </div>
  </div>
);

NonAdItem.propTypes = {
  biz: PropTypes.number,
};

NonAdItem.defaultProps = {
  biz: 2,
};

export default NonAdItem;
