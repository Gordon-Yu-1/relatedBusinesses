import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adStyle.css';

const NonAdItem = props => (
  <div>
    <div>
      <span className={style.bizTitle}>{props.biz.businessName}</span>
      <img className={style.bizPic} src={props.biz.firstImage} alt={props.biz.firstImage} />
      <div>
        <img className={style.rating} src="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg" alt="http://images.nymag.com/news/intelligencer/intelposts120326_starstruck_560.jpg"/><span>{props.biz.quantityRatings} reviews</span>
      </div>
      <div>
        <span>{props.biz.oneLineReview}</span>
      </div>
      <div>
        <span className={style.metatag}>metatag, metatag, metagataga</span>
      </div>
    </div>
  </div>
);

NonAdItem.propTypes = {
  biz: PropTypes.object,
};

NonAdItem.defaultProps = {
  biz: {},
};

export default NonAdItem;
