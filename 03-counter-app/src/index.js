import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import './index.css'

const divRoot = document.querySelector('#root'); // index.html

ReactDOM.render(<FirstApp />, divRoot);
