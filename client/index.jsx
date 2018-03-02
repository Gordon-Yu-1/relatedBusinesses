import React from 'react';
import ReactDOM from 'react-dom';

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedBizs: [],
      currentBiz: this.props.id,
    };
  }

  render() {
    return (
      <div className="adSection">
        <h1>Hello World</h1>
        <ul className="adSectionList">
          <li className="adSectionListItem"> ScrumdiddlyUmptious?
            {/* <AdContent /> */}
          </li>
          <li className="adSectionListItem"> Whatever comes after that mess...
            {/* <AdContent /> */}
          </li>
        </ul>
      </div>
    );
  }
}
// let element = <App name="World" />;

ReactDOM.render(<Ad id="123" />, document.getElementById('ad'));

