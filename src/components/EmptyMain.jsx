import React from "react";
import "./EmptyMain.css";

function EmptyMain({ user }) {
  return (
    <div className="emptymain">
      <h4 className="nametitle">
        Welcome, <span>{user.name}</span>
      </h4>
      <img src={user.profile_pic} alt="avatar" />
      <p className="userstatus">
        Status : <span>{user.status}</span>
      </p>
      <button className="startconvo">Start a conversation</button>
      <p className="hint">
        Search for someone to start chatting with or go to contacts to see who
        is available
      </p>
    </div>
  );
}

export default EmptyMain;
