import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/adContent.css';
import AdSideList from './adSideList';
import AdCenterList from './adCenterList';
import PeopleViewed from './peopleViewed';
import dummy from '../../db/Sues-fake-data';

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBizs: dummy, // a result of a GET request to the server/db for the given businessID
      centerAds: dummy, // will be the above, split into parts
      sideAds: dummy, // will be the above, split into parts
      peopleViewed: dummy, // will be the above, split into parts
      currentBiz: props.originalId, // the id of the product detail page's currently featured biz
    };
  }

  render() {
    return (
      <div className={style.allContent}>
        <div>
          <span className={style.adType}>Recommended Businesses for </span>
          <span className={style.businessName}>OriginalId {this.state.currentBiz}</span>
        </div>
        <div className={style.adType}>Center Top Ads</div>
        <ul className={style.businessName}>
          <AdCenterList businesses={this.state.centerAds} />
        </ul>
        <div className={style.adType}>SideBar Ads</div>
        <ul className={style.businessName}>
          <AdSideList businesses={this.state.sideAds} />
        </ul>
        <div className={style.adType}>People Also hiewed</div>
        <ul className={style.businessName}>
          <PeopleViewed businesses={this.state.peopleViewed} />
        </ul>
      </div>
    );
  }
}

Ad.propTypes = {
  originalId: PropTypes.number,
};

Ad.defaultProps = {
  originalId: 0,
};
export default Ad;
