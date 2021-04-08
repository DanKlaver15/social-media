import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import PeopleList from "../PeopleList";
import { searchPeopleRequest } from "../../state/Search/thunks";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 600,
    color: "#fff",
  },
}));

const SearchResults = ({ results, inProgress, searchPeople }) => {
  const { search } = useLocation();
  const query = search.split("=")[1];
  const classes = useStyles();

  useEffect(() => {
    if (!query) {
      return;
    }

    searchPeople(query);
  }, [query, searchPeople]);

  return inProgress ? (
    <Backdrop open={true} className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : results && results.length > 0 ? (
    <PeopleList people={results} />
  ) : (
    <div className="dark:text-gray-400">No results found.</div>
  );
};

const mapStateToProps = (state) => ({
  results: state.searchResults,
  inProgress: state.searching,
});

const mapDispatchToProps = (dispatch) => ({
  searchPeople: (query) => dispatch(searchPeopleRequest(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
