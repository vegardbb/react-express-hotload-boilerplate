import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import App from './App';

console.log('homo')

render(<App />, document.getElementById('app-container'));
