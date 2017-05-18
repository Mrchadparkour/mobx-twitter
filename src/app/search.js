import {observable, computed, action} from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  getValue() {
    var item = this.state.value.toString();
    return item;
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>What has been tweeted about </span>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
           <span> today?</span>
        </label>
      </form>
    );
  }
}
export default Search;
