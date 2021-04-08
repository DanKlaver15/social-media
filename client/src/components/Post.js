import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updatePostRequest, removePostRequest } from "../state/Post/thunks";
import Avatar from "./Avatar";

const Post = ({ userId, post, updatePost, removePost, index, length }) => {
  const [likes, setLikes] = useState(post.likes);
  const [likesDisplayed, setLikesDisplayed] = useState(post.likes);
  const [color, setColor] = useState("");
  const [darkColor, setDarkColor] = useState("#999da5");

  useEffect(() => {
    if (!post) {
      removePost(post._id);
    }
  }, [post, removePost]);

  const addLike = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
    setLikesDisplayed(likes + 1);
    if (post.userId.darkMode) {
      setDarkColor("purple");
    } else {
      setColor("blue");
    }
    updatePost({ ...post, likes: likes + 1 });
  };

  return (
    <li>
      <div className="relative pb-8">
        {index < length - 1 ? (
          <span
            className="absolute top-14 left-5 -ml-px h-10 w-0.5 bg-gray-300 dark:bg-gray-600"
            aria-hidden="true"
          ></span>
        ) : (
          <></>
        )}
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <Avatar
              size={10}
              source={post.userId.avatar ? post.userId.avatar : null}
            />

            <span className="absolute -bottom-0.5 -right-1 rounded-tl px-0.5 py-px">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <Link
                  to={`/person/${post.userId}`}
                  className="font-medium text-gray-900"
                >
                  {post.user}
                </Link>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {post.date.split("T")[0]}
              </p>
            </div>
            <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
              <p>{post.content}</p>
            </div>
            <div className="pt-3">
              <button onClick={(e) => addLike(e)}>
                {post.userId.darkMode ? (
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    color={darkColor}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    color={color}
                  ></FontAwesomeIcon>
                )}
              </button>
              <div className="dark:text-gray-400">{likesDisplayed}</div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              {userId === post.userId._id && (
                <button
                  type="button"
                  onClick={() => removePost(post._id)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  updatePost: (post) => dispatch(updatePostRequest(post)),
  removePost: (post) => dispatch(removePostRequest(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
