import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { EventContextProvider } from './components/eventContext';


ReactDOM.render(
  <EventContextProvider>
    <App />
  </EventContextProvider>
 ,
  document.getElementById('root')
);


