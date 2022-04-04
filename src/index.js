import React from 'react';
import ReactDOMClient from 'react-dom/client';

import MyProvider from './context/MyProvider';
import Routings from './routes/Routings';

import './App.css'

const root = ReactDOMClient.createRoot(document.querySelector('#root'))


//If no routing functionality is required in Routings we can wrap the routings with our provider
//If we did need functionality within routings then we would wrap the provider with the router in the Routings file.
root.render(<MyProvider><Routings /></MyProvider>);




