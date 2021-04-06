import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import PeopleList from "./PeopleList";

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

const SearchResults = ({ results, inProgress }) => {
  const classes = useStyles();

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

export default connect(mapStateToProps)(SearchResults);
