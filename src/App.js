import React, { Component } from 'react';
import './App.css'
import Header from './child_components/Header';
import FeedPicker from './child_components/FeedPicker';
import ColumnTable from './child_components/ColumnTable';
import FileInput from './child_components/FileInput';
var Baby = require('babyparse');

class App extends Component {
  render() {

    const importColumns = [{id: 1, title:'Product-ExternalId', required:true}, {id:2, title:'SubmissionTime', required: false}, {id:3, title:'Title',required:false}, {id:4, title:'ReviewText', required:false}, {id:5, title:'Rating',required: false}, {id:6, title:'IpAddress', required:false}, {id:7, title:'UserEmailAddress', required:false}, {id:8, title:'ReviewerLocation', required:false}, {id:9, title:'DisplayLocale', require:false}, {id:10, title:'User-ExternalId', required: false}];

    return (
      <div>
        <Header />
        <FeedPicker />
        <ColumnTable columns={ importColumns } />
        <FileInput addCsv={this._addCsv.bind(this)}/>
      </div>

    )
  }

  _addCsv(data) {
    const newCsv = {
      data
    };

    newCsv.parsed = Baby.parse(newCsv.data);
    console.log(newCsv.parsed);
  }

}

export default App;
