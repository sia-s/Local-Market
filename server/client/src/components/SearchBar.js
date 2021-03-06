import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, searchTermChange } from '../actions';

class SearchBar extends Component {
  onInputChange(event) {
    this.props.searchTermChange(event.target.value);
    this.props.getUser(event.target.value);
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <form>
        <input
          placeholder="search users"
          value={searchTerm}
          onChange={this.onInputChange.bind(this)}
        />
        <a href="/api/userInfo">Do this</a>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.search.searchTerm,
    searchResult: state.search.searchResult
  };
};

export default connect(
  mapStateToProps,
  { getUser, searchTermChange }
)(SearchBar);
