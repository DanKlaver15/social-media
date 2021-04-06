import React, { useEffect } from "react";
import { connect } from "react-redux";
import FriendRequestItem from "../FriendRequestItem";
import { getFriendRequests } from "../../state/FriendRequest/thunks";

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
    <div>You have no pending friend requests.</div>
  );
};

const mapStateToProps = (state) => ({
  friendRequests: state.friendRequests,
});

const mapDispatchToProps = (dispatch) => ({
  getFriendRequests: () => dispatch(getFriendRequests()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
