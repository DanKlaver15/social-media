import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ text, link, Icon, click }) => {
  return (
    <Link
      onClick={click}
      to={link}
      className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
    >
      <Icon />
      {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" --> */}
      {/* <!--
	Heroicon name: outline/home

	Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
--> */}

      <span className="mt-2 text-center">{text}</span>
    </Link>
  );
};

export default SidebarLink;
