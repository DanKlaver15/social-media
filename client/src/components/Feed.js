import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import Error from "../components/Error";

const Feed = ({ feed, error }) => {
  const posts = () =>
    feed.map((post, i) => (
      <Post key={post._id} post={post} index={i} length={feed.length} />
    ));

  return !error || !error.error ? (
    <div className="my-4 flow-root">
      <ul className="-mb-8">
        {feed && feed.length > 0 ? posts() : <div>No posts found.</div>}
      </ul>
    </div>
  ) : (
    <div className="my-4">
      <Error message={error.message} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  feed: state.feed,
  error: state.error.getFeed,
});

export default connect(mapStateToProps)(Feed);
