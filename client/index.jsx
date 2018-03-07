import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import url from 'url';
import axios from 'axios';
import style from './components/styles/adContent.css';
import AdSideList from './components/adSideList';
import AdCenterList from './components/adCenterList';
import PeopleViewed from './components/peopleViewed';
import dummy from '../db/Sues-fake-data';

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerAds: dummy,
      sideAds: dummy,
      peopleViewed: dummy,
      currentBiz: this.props.originalId, // the id of the product detail page's currently featured biz
    };
  }

  componentWillMount() {
    const thisUrl = url(document.location);
    const path = thisUrl.pathname; // should result in /biz/SOME_ID
    const reqId = path.split('/')[1]; // should result in the ID
    axios.get(`http://127.0.0.1:3000/related/${reqId}/`)
      .then((response) => {
        this.setState({ centerAds: response.data.slice(0, 3) });
        this.setState({ sideAds: response.data.slice(3, 6) });
        this.setState({ peopleViewed: response.data.slice(6, 10) });
      })
      .catch((error) => {
        console.log(error);
      });
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
