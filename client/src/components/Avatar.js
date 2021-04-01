import React from "react";
import DefaultAvatar from "./DefaultAvatar";

const Avatar = ({ source, size = 12 }) =>
  source ? (
    <img
      className={`h-${size} w-${size} rounded-full`}
      src={`http://localhost:5000/avatars/${source}`}
      alt=""
    />
  ) : (
    <DefaultAvatar size={size} />
  );

export default Avatar;
