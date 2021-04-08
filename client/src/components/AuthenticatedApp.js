import React, { useState } from "react";
import { connect } from "react-redux";
import NarrowSidebar from "./menus/NarrowSidebar";
import Header from "./Header";
import OnlineFriendsList from "./OnlineFriendsList/OnlineFriendsList";

const AuthenticatedApp = ({ user, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const darkOrLight = () => {
    if (user.darkMode === true) {
      return "dark";
    } else {
      return "";
    }
  };
  return (
    <div
      className={`${darkOrLight()} h-screen bg-gray-50 flex overflow-hidden`}
    >
      <NarrowSidebar
        isOpen={sidebarOpen}
        close={() => {
          setSidebarOpen(!sidebarOpen);
          console.log("close");
        }}
      />

      {/* <!-- Content area --> */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <!-- Main content --> */}
        <Header />
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto border-t border-gray-200 dark:bg-gray-800 dark:border-gray-500">
            {/* <!-- Primary column --> */}
            <section
              aria-labelledby="primary-heading"
              className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last p-8 pb-0 overflow-scroll scrollbar scrollbar-track-gray-700"
            >
              {children}
            </section>
          </main>

          {/* <!-- Secondary column (hidden on smaller screens) --> */}
          <aside className="hidden w-96 bg-white border-l border-gray-200 dark:border-gray-500 overflow-y-auto lg:block">
            <OnlineFriendsList />
          </aside>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(AuthenticatedApp);
