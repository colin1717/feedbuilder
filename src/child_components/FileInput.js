import React, { Component } from 'react';
import './FileInput.css';
import { Well, Button } from 'react-bootstrap';

class FileInput extends Component{
  render() {
    return(
      <div className='file-input'>
        <div className='col-sm-4' />
        <div className='col-sm-4 input-well-container'>
          <Well className='input-well'>
            <form className='file-input-form' onSubmit={this._handleSubmit.bind(this)}>
              <label>CSV File</label>
              <input type='file' className='input' ref={(input) => this.csv = input}></input>
              <Button type='submit' className='submit-button' >Submit</Button>
            </form>
          </Well>
        </div>
        <div className='col-sm-4' />
      </div>
    )
  }

  _handleSubmit(event) {
    event.preventDefault();

    let csv = this.csv.files;

    let reader = new FileReader();
    reader.onload = (data) => {
      data = reader.result;
      console.log(data);
    }
    reader.readAsText(csv[0]);
  }

}


export default FileInput;
