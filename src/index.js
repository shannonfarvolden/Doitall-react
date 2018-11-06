import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// Development only axios helpers!
window.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
