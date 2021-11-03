import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import EventDetailPage from './components/eventDetailed/EventDetailPage';

function App() {
  return (
    <div id="webPage">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/event/:eventId' >
          <EventDetailPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
