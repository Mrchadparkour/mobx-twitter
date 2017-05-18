import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';

import {TwitterStore} from './TwitterStore';

const twitterStore = new TwitterStore();

ReactDOM.render(
  <Main twitterStore={twitterStore} />,
  document.getElementById('app')
);
