import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import style from './components/styles/adContent.css';
import AdSideList from './components/adSideList';
import AdCenterList from './components/adCenterList';
import PeopleViewed from './components/peopleViewed';
import dummy from '../db/Sues-fake-data';

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBizs: dummy, // a result of a GET request to the server/db for the given businessID
      centerAds: dummy, // will be the above, split into parts
      sideAds: dummy, // will be the above, split into parts
      peopleViewed: dummy, // will be the above, split into parts
      currentBiz: this.props.originalId, // the id of the product detail page's currently featured biz
    };
  }

  render() {
    return (
      <div className={style.allContent}>
        <div>
          <span className={style.adType}>Recommended Businesses for </span>
          <span className={style.businessName}>Business Id {this.state.currentBiz}</span>
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

ReactDOM.render(<Ad />, document.getElementById('ad'));
