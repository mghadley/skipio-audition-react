import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsListContainer from './components/ContactsListContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contacts</h2>
        </div>
        <ContactsListContainer />
      </div>
    );
  }
}

export default App;
