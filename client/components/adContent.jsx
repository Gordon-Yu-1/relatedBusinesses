import React from 'react';
import style from './styles/adContent.css';
import AdSideList from './adSideList';
import AdCenterList from './adCenterList';
import PeopleViewed from './peopleViewed';

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBizs: [1, 2, 3], // a result of a GET request to the server/db for the given businessID
      centerAds: [4, 5, 6],
      sideAds: [7, 8, 9],
      peopleViewed: [10, 11, 12],
      currentBiz: this.props.number,
    };
  }

  render() {
    return (
      <div className={style.allContent}>
        <div>
          <span className={style.adType}>Recommended Businesses for </span>
          <span className={style.businessName}>CURRENT BUSINESS HERE</span>
        </div>
        <span className={style.adType}>Center Top Ads</span>
        <ul className={style.businessName}>
          AD CENTER LIST HERE
        </ul>
        <span className={style.adType}>SideBar Ads</span>
        <ul className={style.businessName}>
          AD SIDE LIST HERE
        </ul>
        <span className={style.adType}>People Also Viewed</span>
        <ul className={style.businessName}>
          PEOPLE VIEWED HERE
        </ul>
      </div>
    );
  }
}
// let element = <App name="World" />;

export default Ad;