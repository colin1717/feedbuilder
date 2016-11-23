import React, { Component } from 'react';
import './ColumnTable.css';
import { Table } from 'react-bootstrap';
import ColumnCheckbox from './ColumnCheckbox';

class ColumnTable extends Component {

  componentWillMount(){
    this.presentColumns = new Set();
    console.log(this.presentColumns)
  }

  render() {
    let columns = this.props.columns;
    return (
      <div className='column-table'>
        <div className='col-sm-12'>
          <Table className='table' bordered condensed striped responsive>
            <thead>
              <tr>
                {(columns).map((column) => <td key={column.id}>{column.title}</td>) }
              </tr>
            </thead>
            <tbody>
              <tr>
                {(columns).map((column) => <td key={column.id}><ColumnCheckbox handleCheckboxChange={this._toggleCheckbox} title={column.title}  /></td> )}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    )
  }

  _testProps() {
    console.log(this.props.columns)
  }

  _createCheckbox() {
    return <ColumnCheckbox title={this.column.title} handleCheckboxChange={this._toggleCheckbox} key={this.column.title} />
  }

  _toggleCheckbox(title) {
    console.log('toggleCheckbox in ColumnTable is running, but it cant access presentColumns')
  }

}


export default ColumnTable;
