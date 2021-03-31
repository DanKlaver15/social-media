import React, { useState } from "react";
import { connect } from "react-redux";
import { addPostRequest } from "../../state/Post/thunks";

const AddPostForm = ({ userId, addPost }) => {
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPost({ userId, content });
      }}
    >
      <div>
        <label htmlFor="comment" className="sr-only">
          Post Comment
        </label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          id="comment"
          name="comment"
          rows="3"
          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
          placeholder="Add a post..."
        ></textarea>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Post
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  userId: state.user._id,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (content) => dispatch(addPostRequest(content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
