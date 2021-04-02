import React from "react";
import { connect } from "react-redux";
import {
  acceptFriendRequest,
  declineFriendRequest,
} from "../state/FriendRequest/thunks";
import Avatar from "./Avatar";

const FriendRequestItem = ({
  isAccepting,
  isDeclining,
  acceptRequest,
  declineRequest,
  friendRequest,
}) => {
  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col p-8">
        <div className="mx-auto">
          <Avatar source={friendRequest.avatar} size={32} />
        </div>
        <h3 className="mt-6 text-gray-900 text-sm font-medium">
          {`${friendRequest.firstName} ${friendRequest.lastName}`}
        </h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Date</dt>
          <dd className="text-gray-500 text-sm">
            {friendRequest.requestDate.split("T")[0]}
          </dd>
          <dt className="sr-only">Role</dt>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <button
              disabled={friendRequest.accepted}
              onClick={(e) => acceptRequest(friendRequest._id)}
              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
            >
              {friendRequest.accepted ? "Accepted" : "Accept"}
            </button>
          </div>
          {!friendRequest.accepted && (
            <div className="-ml-px w-0 flex-1 flex">
              <button
                onClick={(e) => declineRequest(friendRequest._id)}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                Decline
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => ({
  isAccepting: state.acceptingFriendRequest,
  isDeclining: state.decliningFriendRequest,
});

const mapDispatchToProps = (dispatch) => ({
  acceptRequest: (id) => dispatch(acceptFriendRequest(id)),
  declineRequest: (id) => dispatch(declineFriendRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequestItem);
