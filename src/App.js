import React, { Component } from 'react';
import './App.css'
import Header from './child_components/Header';
import FeedPicker from './child_components/FeedPicker';
import ColumnTable from './child_components/ColumnTable';
import FileInput from './child_components/FileInput';
import { importConverter, downloadXml } from './converters';
import {Button, Well} from 'react-bootstrap';

var Baby = require('babyparse');

class App extends Component {

  constructor(){
    super();

    this.state = {
      showDownloadButton: false
    }

    this.presentColumns = new Set();
    this.presentColumnsArray = [];

    this._passPresentColumns = function(presentColumns){
      this.presentColumns = presentColumns;
    }

    this._addCsv = function(data) {
      const newCsv = {
        data
      };

      newCsv.parsed = Baby.parse(newCsv.data);
      console.log('newCsv.parsed');
      console.log(newCsv.parsed);

      this._buildPresentColumnsArray(this.presentColumns);
      this.output = importConverter(newCsv.parsed.data, this.presentColumnsArray);

      this._showDownloadButton();
    }

    this._buildPresentColumnsArray = function(presentColumns){
      for (let column of presentColumns){
        this.presentColumnsArray.push(column);
      }
      console.log('====presentColumnsArray=====');
      console.log(this.presentColumnsArray);
    }
  }

  render() {

    const importColumns = [{id: 1, title:'Product-ExternalId', required:true}, {id:2, title:'SubmissionTime', required: false}, {id:3, title:'Title',required:false}, {id:4, title:'ReviewText', required:false}, {id:5, title:'Rating',required: false}, {id:6, title:'IpAddress', required:false}, {id:7, title:'UserEmailAddress', required:false}, {id:8, title:'ReviewerLocation', required:false}, {id:9, title:'DisplayLocale', require:false}, {id:10, title:'User-ExternalId', required: false}];
    let fileInput = <FileInput addCsv={this._addCsv.bind(this)}/>;

    if (this.state.showDownloadButton){
      fileInput = <div className='file-input'>
      <div className='col-sm-4 input-well-container'/>
      <Well className='download-button-wrapper input-well col-sm-4'>
      <h5 className='download-text'>Your file is ready.</h5>
      <br/>
      <Button onClick={downloadXml(this.output)} className='download-button'>Download</Button>
      </Well>
      <div className='col-sm-4'/>
      </div>
    }

    return (
      <div>
        <Header />
        <FeedPicker />
        <ColumnTable columns={ importColumns } passPresentColumns={this._passPresentColumns.bind(this)}/>
        { fileInput }
      </div>

    )
  }

  _showDownloadButton(){
    this.setState({
      showDownloadButton: true
    })
  }

}

export default App;
