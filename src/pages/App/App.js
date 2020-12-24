import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Landing from '../../components/Landing/Landing'
import AboutPage from '../About/AboutPage';
import ServicesPage from '../Services/ServicesPage';
import './App.css';


class App extends Component {
  /*--- State ---*/
  /*--- Handle Methods ---*/
  /*--- Lifecycle Methods ---*/
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <Landing />
          }/>
          <Route exact path='/about' render={() =>
            <AboutPage />
          }/>
          <Route exact path='/services' render={() =>
            <ServicesPage />
          }/>
        </Switch>
      </div>
    );
  };
}

export default App;
