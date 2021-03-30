import React from "react";
import DefaultAvatar from "./DefaultAvatar";

const Avatar = ({ source, width = 12, height = 12 }) =>
  source ? (
    <img
      className={`h-${height} w-${width} rounded-full`}
      src={source}
      alt=""
    />
  ) : (
    <DefaultAvatar height={height} width={width} />
  );

export default Avatar;
