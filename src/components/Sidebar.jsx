import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import "./Sidebar.css";
import Contact from "./Contact";

function Sidebar({ contacts, activeUserId }) {
  return (
    <div className="Sidebar">
      {contacts.map((contact) => (
        <Contact
          key={contact.user_id}
          contact={contact}
          activeUserId={activeUserId}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  let contacts = _.values(state.contacts);
  let activeUserId = state.activeUserId;
  return {
    contacts,
    activeUserId,
  };
};

export default connect(mapStateToProps)(Sidebar);
