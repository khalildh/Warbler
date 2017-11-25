import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Warbler from './containers/Warbler';
import registerServiceWorker from './registerServiceWorker';

render(
  <Warbler />
  ,
  document.getElementById('root')
);
registerServiceWorker();
