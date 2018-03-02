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
      <div class="adSection">
        <h1>Hello World</h1>
        <ul class="adSectionList">
          <li class="adSectionListItem"> List Item
            {/* <AdContent /> */}
          </li>
          <li class="adSectionListItem"> List Item
            {/* <AdContent /> */}
          </li>
        </ul>
          
      </div>
    );
  }
}
// let element = <App name="World" />;
const Scoreboard = props => (
  <div id="score">
    { props.scores.map(thingy => <Score name={props.name} score={thingy} />)}
  </div>
);

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <h2> {this.props.name}: <br /> {this.props.score}!</h2>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <h2> Hello, <br /> {this.props.name}! </h2>);
  }
}


ReactDOM.render(<App name="Smith" />, document.getElementById('app'));

