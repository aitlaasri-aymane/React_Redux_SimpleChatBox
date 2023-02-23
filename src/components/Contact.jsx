import "./Contact.css";
import React from "react";
import store from "../redux/store";
import { setActiveUserId } from "../redux/actions";

function Contact({ contact, activeUserId }) {
  return (
    <div
      className={
        contact.user_id === activeUserId ? "active contact" : "contact"
      }
      onClick={() => handleContactClick(contact)}
    >
      <div className="avatarContainer">
        <img className="avatar" src={contact.profile_pic} alt={contact.name} />
        {contact.isOnline && <div className="status-online"></div>}
      </div>
      <h4 className="name">{contact.name}</h4>
      <p className="status">{contact.status}</p>
    </div>
  );
}

function handleContactClick(contact) {
  store.dispatch(setActiveUserId(contact.user_id));
}

export default Contact;
