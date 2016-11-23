import React, { Component } from 'react';
import "./ColumnCheckbox.css";

class ColumnCheckbox extends Component {
  constructor() {
    super();

    this.state = {
      isChecked: false
    }
  }

  render() {
    return (
      <input type='checkbox' value={this.props.title} onChange={this._toggleCheckbox.bind(this)} key={this.props.key} />
    )
  }

  _toggleCheckbox() {
    this.setState({
      isChecked: !this.state.isChecked
    })

    this.props.handleCheckboxChange(this.props.title);
  }
}

export default ColumnCheckbox;
