import React, { Component } from 'react';
import './FeedPicker.css';
import { ButtonGroup, Button } from 'react-bootstrap';

class FeedPicker extends Component {
  render() {
    return (
      <div className='feedpicker'>
        <div className='col-sm-3' />
        <div className='col-sm-6 middle'>
          <ButtonGroup>
            <Button className='feedpicker-button'>Content Import</Button>
            <Button className='feedpicker-button'>Post Interaction Email</Button>
          </ButtonGroup>
        </div>
        <div className='col-sm-3' />
      </div>
    )
  }
}

export default FeedPicker;
