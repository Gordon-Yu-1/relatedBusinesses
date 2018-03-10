import React from 'react';
import ReactDOM from 'react-dom';
import AdCenter from './adCenter';
import AdSide from './adSide';
import PeopleViewed from './peopleViewed';

ReactDOM.render(<AdSide />, document.getElementById('related-side'));
ReactDOM.render(<PeopleViewed />, document.getElementById('people-viewed'));
ReactDOM.render(<AdCenter />, document.getElementById('related-top'));
