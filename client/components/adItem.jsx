import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adStyle.css';

const AdItem = props => (
  <div>
    <div>
      <span className={style.ad}>Ad</span><span className={style.bizTitle}>{props.biz.businessName}</span>
      <img className={style.bizPic} src={props.biz.firstImage} alt="https://rlv.zcache.com/happy_smiley_face_round_stickers-rbdcd90a58b8e40a9b895e7c2fd1e65ef_v9waf_8byvr_540.jpg" />
      <div>
        <span>stars</span><span>No. of reviews</span>
      </div>
      <div>
        <span>reviewtext</span>
      </div>
      <div>
        <span className={style.metatag}>metatag, metatag, metagataga</span>
      </div>
    </div>
  </div>
);

AdItem.propTypes = {
  biz: PropTypes.object,
};

AdItem.defaultProps = {
  biz: {},
};

export default AdItem;
