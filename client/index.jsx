import React from 'react';
import ReactDOM from 'react-dom';
import Ad from './components/adContent';

const App = () => <Ad originalId="123" />;

ReactDOM.render(<App />, document.getElementById('app'));
