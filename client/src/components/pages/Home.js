import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddPostForm from "../forms/AddPostForm";
import Avatar from "../Avatar";
import { getFeedRequest } from "../../state/Feed/thunks";
import Feed from "../Feed";

const Home = ({ user, getFeed }) => {
  useEffect(() => {
    if (user._id) {
      getFeed(user._id);
    }
  }, [getFeed, user]);
  return (
    <>
      <div className="-m-8 mb-4">
        <div className="h-32 w-full lg:h-48 bg-indigo-500 dark:bg-indigo-900"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <Avatar size={32} source={user.avatar} />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 truncate dark:text-gray-400">
                  {`${user.firstName} ${user.lastName}`}
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              Ricardo Cooper
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-shrink-0">
            <Avatar size={10} source={user.avatar} />
          </div>
          <div className="min-w-0 flex-1">
            <AddPostForm />
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: () => dispatch(getFeedRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
