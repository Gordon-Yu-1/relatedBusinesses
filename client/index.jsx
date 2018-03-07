import React from 'react';
import ReactDOM from 'react-dom';
import Ad from './components/adContent';

const App = () => <Ad originalId="124" />; // input to THIS module to search this mod's db for RBs

ReactDOM.render(<App />, document.getElementById('app'));
