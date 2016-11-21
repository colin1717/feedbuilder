import React, { Component } from 'react';
import './FeedPicker.css';
import { ButtonGroup, Button, Well } from 'react-bootstrap';

class FeedPicker extends Component {
  render() {

    let explanation = <Well className='order-explanation-well'><span className='small-title'>feedbuilder</span> will create an XML file for import from a correctly formatted CSV file. <br/> Start by selecting the type of feed you would like to create. </Well>;

    return (
      <div className='feedpicker'>
        <div className='feedpicker-top'>
          <div className='col-sm-3' />
          <div className='col-sm-6 middle'>
            <ButtonGroup>
              <Button className='feedpicker-button'>Content Import</Button>
              <Button className='feedpicker-button'>Post Interaction Email</Button>
            </ButtonGroup>
          </div>
          <div className='col-sm-3' />
        </div>
        <div className='order-explanation container'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            {explanation}
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    )
  }
}

export default FeedPicker;
