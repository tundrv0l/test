import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
      background: '#f5f5f5',
      text: '#333333',
      'light-1': '#ffffff',
      'light-2': '#f8f8f8',
      'dark-1': '#333333',
      'dark-2': '#555555',
    },
    font: {
      family: 'Arial',
      size: '18px',
      height: '20px',
    },
  },
  button: {
    border: {
      radius: '4px',
    },
    primary: {
      color: 'brand',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme} full>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();