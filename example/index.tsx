import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NextMap } from '../src/index';

const App = () => {
  return (
    <div>
      <NextMap lat={32.64292} lng={51.66728} popUp="سلام" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
