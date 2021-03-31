import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Feed = ({ feed }) => {
  const posts = () => feed.map((post) => <Post key={post._id} post={post} />);

  return (
    <div className="mt-4 flow-root">
      <ul className="-mb-8">
        {feed && feed.length > 0 ? posts() : <div>No posts found.</div>}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feed: state.feed,
});

export default connect(mapStateToProps)(Feed);
