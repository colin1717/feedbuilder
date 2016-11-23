import React, { Component } from 'react';
import './ColumnTable.css';
import { Table } from 'react-bootstrap';
import ColumnCheckbox from './ColumnCheckbox';

class ColumnTable extends Component {
  componentWillMount(){
    this.presentColumns = new Set();
    console.log('====componentWillMount this=====');
    console.log(this)
  }

  _testProps() {
    console.log(this.props.columns)
  }

  _createCheckbox(column) {
    return <ColumnCheckbox title={this.column.title} handleCheckboxChange={this._toggleCheckbox} key={this.column.title} />
  }


  _toggleCheckbox(title) {
    if (this.presentColumns.has(title)){
      this.presentColumns.delete(title)
    } else {
      this.presentColumns.add(title)
    }
    console.log('=====toggleCheckbox this=====');
    console.log(this.presentColumns);
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
                {(columns).map((column) => <td key={column.id}><ColumnCheckbox handleCheckboxChange={this._toggleCheckbox.bind(this)} title={column.title}  /></td> )}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    )
  }

}


export default ColumnTable;
