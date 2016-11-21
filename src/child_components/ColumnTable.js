import React, { Component } from 'react';
import './ColumnTable.css';
import { Table, Checkbox } from 'react-bootstrap';

class ColumnTable extends Component {
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
                {(columns).map((column) =><td key={column.id}><Checkbox /></td>) }
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
}


export default ColumnTable;
