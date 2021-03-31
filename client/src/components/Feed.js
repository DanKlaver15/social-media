import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Feed = ({ feed }) => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {feed.map((post) => {
          return <Post post={post} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feed: state.feed,
});

export default connect(mapStateToProps)(Feed);
