import React, { useState, useEffect } from "react";
import OnlineListItem from "./OnlineListItem";
import { getFriendsRequest } from "../../state/Friend/thunks";
import { connect } from "react-redux";

const OnlineFriendsList = ({ friends, friendsLoading, getFriends, user }) => {
  const [listType, setListType] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (user._id) {
      getFriends(user._id);
    }
  }, [getFriends, user._id]);

  let allListFormat = "";
  let onlineListFormat = "";
  let offlineListFormat = "";
  if (listType === "all") {
    allListFormat =
      "focus:border-transaprent border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400";
  } else {
    allListFormat =
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300";
  }
  if (listType === "online") {
    onlineListFormat =
      "focus:border-transaprent border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400";
  } else {
    onlineListFormat =
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300";
  }
  if (listType === "offline") {
    offlineListFormat =
      "focus:border-transaprent border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400";
  } else {
    offlineListFormat =
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 w dark:text-gray-400 dark:hover:text-gray-300";
  }

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const letterDivider = (letter, listArray) => {
    let alphaAll = [];
    let alphaOnline = [];
    let alphaOffline = [];

    if (listType === "all") {
      alphaAll = listArray.filter(
        (friend) => friend.lastName.toUpperCase().charAt(0) === letter
      );
    }

    if (listType === "online") {
      alphaOnline = listArray.filter(
        (friend) =>
          (friend.lastName.toUpperCase().charAt(0) === letter) &
          (friend.online === true)
      );
    }

    if (listType === "offline") {
      alphaOffline = listArray.filter(
        (friend) =>
          (friend.lastName.toUpperCase().charAt(0) === letter) &
          (friend.online === false)
      );
    }

    let emptyAll = alphaAll.length === 0;
    let emptyOnline = alphaOnline.length === 0;
    let emptyOffline = alphaOffline.length === 0;

    if ((listType === "all") & !emptyAll) {
      return (
        <div key={letter}>
          <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500 dark:bg-gray-600 dark:border-gray-400 dark:text-gray-400">
            <h3>{letter}</h3>
          </div>
          {alphaAll.map((friend) => {
            return showList(friend);
          })}
        </div>
      );
    } else if ((listType === "online") & !emptyOnline) {
      return (
        <div key={letter}>
          <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500 dark:bg-gray-600 dark:border-gray-400 dark:text-gray-400">
            <h3>{letter}</h3>
          </div>
          {alphaOnline.map((friend) => {
            return showList(friend);
          })}
        </div>
      );
    } else if ((listType === "offline") & !emptyOffline) {
      return (
        <div key={letter}>
          <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500 dark:bg-gray-600 dark:border-gray-400 dark:text-gray-400">
            <h3>{letter}</h3>
          </div>
          {alphaOffline.map((friend) => {
            return showList(friend);
          })}
        </div>
      );
    }
  };

  const showList = (friend) => {
    if (listType === "all") {
      return <OnlineListItem key={friend._id} friend={friend} />;
    } else if (listType === "online" && friend.online === true) {
      return <OnlineListItem key={friend._id} friend={friend} />;
    } else if (listType === "offline" && friend.online === false) {
      return <OnlineListItem key={friend._id} friend={friend} />;
    }
  };

  function sortList(a, b) {
    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  const searchFriends = (friends) => {
    let filteredFriends = [];
    if (query.trim().length > 0) {
      filteredFriends = friends.filter(
        (friend) =>
          friend.firstName.toLowerCase().includes(query.toLowerCase()) |
          friend.lastName.toLowerCase().includes(query.toLowerCase())
      );
    }
    friends.sort(sortList);
    filteredFriends.sort(sortList);
    if (filteredFriends.length > 0) {
      return alphabet.map((letter) => {
        return letterDivider(letter, filteredFriends);
      });
    } else if ((filteredFriends.length === 0) & (query.length > 0)) {
      return (
        <div className="flex justify-center p-6 dark:text-gray-400">
          No Friends Found
        </div>
      );
    } else {
      return alphabet.map((letter) => {
        return letterDivider(letter, friends);
      });
    }
  };

  return friendsLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="h-full w-full flex flex-col bg-white shadow-xl overflow-y-scroll p-0 dark:bg-gray-800 scrollbar-thin scrollbar-track-gray-700">
      <div className="pl-6 pt-3 pb-3">
        <div className="flex items-start justify-between">
          <h2
            className="text-lg font-medium text-gray-900 dark:text-gray-400"
            id="slide-over-title"
          >
            Friends
          </h2>
        </div>
      </div>
      <div className="border-t border-gray-300 px-6 pb-4 dark:border-gray-600">
        <div>
          <div className="mt-1 flex rounded-md shadow-md pt-3">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <input
                onChange={(e) => setQuery(e.target.value.trim())}
                value={query}
                type="text"
                className="border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 dark:focus:border-transparent dark:focus:ring-black"
              />
            </div>
            <div className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:border-gray-500">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 dark:border-gray-500">
        <div className="px-6">
          <nav className="-mb-px flex space-x-6">
            <button
              className={`${allListFormat} hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setListType("all")}
            >
              All
            </button>

            <button
              className={`${onlineListFormat} hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setListType("online")}
            >
              Online
            </button>

            <button
              className={`${offlineListFormat} hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
              onClick={() => setListType("offline")}
            >
              Offline
            </button>
          </nav>
        </div>
      </div>
      <ul className="divide-y divide-gray-200 overflow-y-auto h-screen transition ease-in duration-75 transform opacity-100 scale-100 dark:divide-gray-500">
        {searchFriends(friends)}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  friends: state.friends,
  friendsLoading: state.friendsLoading,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getFriends: (userId) => dispatch(getFriendsRequest(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnlineFriendsList);
