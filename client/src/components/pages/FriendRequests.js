import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFriendRequests } from "../../state/FriendRequest/thunks";
import FriendRequestItem from "../FriendRequestItem";
import Info from "../alerts/Info";
import AppSearch from "../AppSearch";

const FriendRequests = ({ friendRequests, getFriendRequests }) => {
  useEffect(() => {
    getFriendRequests();
  }, [getFriendRequests]);

  return friendRequests && friendRequests.length > 0 ? (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {friendRequests.map((request) => {
        return <FriendRequestItem key={request._id} friendRequest={request} />;
      })}
    </ul>
  ) : (
    <>
      <Info message="You do not have any pending friend requests. Try searching to find more friends." />
      <AppSearch />
    </>
  );
};

const mapStateToProps = (state) => ({
  friendRequests: state.friendRequests,
});

const mapDispatchToProps = (dispatch) => ({
  getFriendRequests: () => dispatch(getFriendRequests()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
