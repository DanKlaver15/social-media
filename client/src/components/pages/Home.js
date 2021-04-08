import React, { useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "../Avatar";
import AddPostForm from "../forms/AddPostForm";
import { getFeedRequest } from "../../state/Feed/thunks";
import Feed from "../Feed";
import UserPageHeader from "../UserPageHeader";

const Home = ({ user, getFeed, feed }) => {
  useEffect(() => {
    if (user._id) {
      getFeed(user._id);
    }
  }, [getFeed, user]);
  return (
    <>
      <UserPageHeader
        name={`${user.firstName} ${user.lastName}`}
        avatar={user.avatar}
      >
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <Avatar size={10} source={user.avatar} />
          </div>
          <div className="min-w-0 flex-1">
            <AddPostForm />
            <Feed feed={feed} />
          </div>
        </div>
      </UserPageHeader>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  feed: state.feed,
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: (userId) => dispatch(getFeedRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
