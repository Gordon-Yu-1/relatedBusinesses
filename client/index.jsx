import React from 'react';
import ReactDOM from 'react-dom';
import AdContent from './components/adContent.jsx'

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBizs: [],  // a result of a GET request to the server/db for the given businessID
      centerAds: this.state.relatedBizs.splice(0, 2),
      sideAds: this.state.relatedBizs.splice(2, 4),
      peopleViewed: this.state.relatedBizs.splice(4, 5),
      currentBiz: this.props.id,
    };
  }

  render() {
    return (
      <div className="allAdSection">
        <h1>Center Top Ads</h1>
        <ul className="centerSection">
          <AdCenterContent businesses={this.state.centerAds} />
        </ul>
        <h1>SideBar Ads</h1>
        <ul className="sidebarSection">
          <AdSideContent businesses={this.state.sideAds} />
        </ul>
        <h1>People Also Viewed</h1>
        <ul className="sidebarSection">
          <PeopleViewed businesses={this.state.peopleViewed} />
        </ul>
      </div>
    ); 
  }
}
// let element = <App name="World" />;

ReactDOM.render(<Ad id="123" />, document.getElementById('ad'));

