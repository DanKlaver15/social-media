import React from "react";

import Post from "./Post";
import Error from "../components/alerts/Error";

const Feed = ({ feed, error }) => {
  const posts = () => feed.map((post) => <Post key={post._id} post={post} />);

  return !error || !error.error ? (
    <div className="my-4 flow-root">
      <ul className="-mb-8">
        {feed && feed.length > 0 ? (
          posts()
        ) : (
          <div className="dark:text-gray-400">No posts found.</div>
        )}
      </ul>
    </div>
  ) : (
    <div className="my-4">
      <Error message={error.message} />
    </div>
  );
};

export default Feed;
