import React, { Component } from 'react';
import './App.css'
import Header from './Header';
import FeedPicker from './FeedPicker';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeedPicker />
      </div>

    )
  }
}

export default App;
