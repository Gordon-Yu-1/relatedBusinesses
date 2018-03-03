import React from 'react';
import style from './styles/sidebar_style.css';

const adItem = props => (
  <div className={style.sidebar}>
    <div className={style.passportContainer}>
      <img className={style.avatar} src="http://www.academy-cube.com/wp-content/uploads/2015/05/iStock_000023732304_XXXLarge.jpg" alt="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/128/Emotes-face-smile-icon.png" />
      <div className={style.userInfo}>
        <a className={style.username} href="/">Hello</a>
        <div className={style.userLocation}>Oakland, CA</div>
      </div>
    </div>
  </div>
);

export default adItem;
