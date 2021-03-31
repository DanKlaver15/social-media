import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Post = ({ post }) => {
  return (
    <li>
      <div class="relative pb-8">
        <span
          class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <div class="relative flex items-start space-x-3">
          <div class="relative">
            <Avatar size={10} source={post.avatar} />

            <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
              <svg
                class="h-5 w-5 text-gray-400"
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
          <div class="min-w-0 flex-1">
            <div>
              <div class="text-sm">
                <Link
                  to={`/person/${post.userId}`}
                  class="font-medium text-gray-900"
                >
                  {post.user}
                </Link>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">{post.date}</p>
            </div>
            <div class="mt-2 text-sm text-gray-700">
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;
