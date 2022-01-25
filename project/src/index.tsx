import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { cardOne, Points,ReportFirst,muchCites } from './moks/offer';
import {reducer} from '../src/store/reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        card={cardOne}
        room={cardOne}
        points={Points}
        reps= {ReportFirst[0]}
        rep= {ReportFirst[0]}
        cityName={muchCites}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
