import React from 'react';
import ReactDOMClient from 'react-dom/client';

import MyProvider from './context/MyProvider';
import Routings from './routes/Routings';

import './App.css'

const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<MyProvider><Routings /></MyProvider>);




