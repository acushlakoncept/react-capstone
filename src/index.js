import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './redux/store';
import StockdetailsContainer from './container/StockDetailsContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <StockdetailsContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
