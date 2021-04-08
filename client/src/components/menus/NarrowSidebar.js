import React from "react";
import SidebarLink from "./components/SidebarLink";
import {
  RequestsSidebarIcon,
  HomeSidebarIcon,
  RecipesSidebarIcon,
  AddRecipeSidebarIcon,
  SettingsSidebarIcon,
} from "../Icons/icons";
import Logo from "../Logo";

const NarrowSidebar = ({ isOpen, close }) => {
  const menuOverlay = isOpen ? "opacity-100" : "opacity-0";
  const closeButton = isOpen ? "opacity-100" : "opacity-0";

  const offCanvasMenu = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block dark:bg-gray-900">
        <div className="w-full py-6 flex flex-col items-center">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <div className="flex-1 mt-6 w-full px-2 space-y-1">
            {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" --> */}

            {/* <!--
							Heroicon name: outline/home
	
							Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
						--> */}
            <SidebarLink text={"Home"} link="/" Icon={HomeSidebarIcon} />
            <SidebarLink
              text={"Friend Requests"}
              link="/requests"
              Icon={RequestsSidebarIcon}
            />
            <SidebarLink
              text={"Recipes"}
              link="/recipes"
              Icon={RecipesSidebarIcon}
            />

            <SidebarLink
              text={"Add Recipe"}
              link="/add-recipe"
              Icon={AddRecipeSidebarIcon}
            />
            <SidebarLink
              text={"Settings"}
              link="/settings"
              Icon={SettingsSidebarIcon}
            />
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  --> */}
      <div className="md:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-40 flex">
          <div
            className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-linear duration-300 ${menuOverlay}`}
            aria-hidden="true"
          ></div>

          <div
            className={`relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col transition ease-in-out duration-300 transform ${offCanvasMenu}`}
          >
            <div
              className={`absolute top-1 right-0 -mr-14 p-1 ease-in-out duration-300 ${closeButton}`}
            >
              <button
                onClick={close}
                type="button"
                className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close sidebar</span>
              </button>
            </div>

            <div className="flex-shrink-0 px-4 flex items-center">
              <Logo />
            </div>
            <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav className="h-full flex flex-col">
                <div className="space-y-1">
                  {/* <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" --> */}
                  {/* <!--
                  Heroicon name: outline/home

                  Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
                --> */}
                  <SidebarLink
                    click={close}
                    text={"Home"}
                    link="/"
                    Icon={HomeSidebarIcon}
                  />
                  <SidebarLink
                    click={close}
                    text={"Friend Requests"}
                    link="/requests"
                    Icon={RequestsSidebarIcon}
                  />
                  <SidebarLink
                    click={close}
                    text={"Recipes"}
                    link="/recipes"
                    Icon={RecipesSidebarIcon}
                  />

                  <SidebarLink
                    click={close}
                    text={"Add Recipe"}
                    link="/add-recipe"
                    Icon={AddRecipeSidebarIcon}
                  />
                  <SidebarLink
                    click={close}
                    text={"Settings"}
                    link="/settings"
                    Icon={SettingsSidebarIcon}
                  />
                </div>
              </nav>
            </div>
          </div>

          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NarrowSidebar;
