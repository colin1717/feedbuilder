import React, { Component } from 'react';
import './App.css'
import Header from './child_components/Header';
import FeedPicker from './child_components/FeedPicker';

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
