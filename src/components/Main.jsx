import "./Main.css";

import React from "react";
import EmptyMain from "./EmptyMain";
import Chatwindow from "./Chatwindow";
import { connect } from "react-redux";

function Main({ user, activeUserId }) {
  return (
    <div className="Main">
      {activeUserId ? (
        <Chatwindow activeUserId={activeUserId} />
      ) : (
        <EmptyMain user={user} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  let activeUserId = state.activeUserId;
  let user = state.users;
  return {
    user,
    activeUserId,
  };
};

export default connect(mapStateToProps)(Main);
