import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/pc/App.js';
import  './css/pc/style.css'


const app = ReactDOMClient.createRoot(document.getElementById('app'))

app.render(<App />)