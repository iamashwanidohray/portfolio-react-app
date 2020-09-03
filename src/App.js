import React from 'react';
import { Home, About, Contact, Service, Regards } from './components';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './UI/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/regards" component={ Regards } />
        <Route path="/about" component={ About } />
        <Route path="/services" component={ Service } />
        <Route path="/contact" component={ Contact } />
        <Route path="/home" component={ Home } />
        <Route path="/" component={ Home } />
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
