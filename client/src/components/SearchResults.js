import React from "react";
import { connect } from "react-redux";
import PeopleList from "./PeopleList";

const SearchResults = ({ results }) => {
  return results && results.length > 0 ? (
    <PeopleList people={results} />
  ) : (
    <div>No results found.</div>
  );
};

const mapStateToProps = (state) => ({
  results: state.searchResults,
});

export default connect(mapStateToProps)(SearchResults);
