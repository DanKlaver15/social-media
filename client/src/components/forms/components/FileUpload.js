import React, { useRef } from "react";

const FileUpload = ({ onFileSelect }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    if (e.target.files[0]) {
      onFileSelect(e.target.files[0]);
      e.target.form.reset();
    }
  };
  return (
    <>
      <button
        onClick={(e) => {
          onFileSelect("");
          fileInput.current.click();
        }}
        type="button"
        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-500 dark:text-gray-300"
      >
        Change
      </button>
      <input
        ref={fileInput}
        className="hidden"
        type="file"
        onChange={handleFileInput}
      />
    </>
  );
};

export default FileUpload;
