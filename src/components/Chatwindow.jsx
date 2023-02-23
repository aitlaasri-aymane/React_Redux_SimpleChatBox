import React from "react";
import store from "../redux/store";
import _ from "lodash";
import "./Chatwindow.css";
import { sendNewMessage, typingNewMessage } from "../redux/actions";
import { connect } from "react-redux";
import { useRef, useEffect } from "react";

function Chatwindow({ activeUserId, typingMsg, messages }) {
  const activeUser = store.getState().contacts[activeUserId];
  const Messages = _.values(messages[activeUserId]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="chatwindow">
      <div className="header">
        <h3 className="contactname">{activeUser.name}</h3>
        <p className="contactstatus">{activeUser.status}</p>
        <p className="contactisonline">{activeUser.isOnline}</p>
      </div>
      <div className="chatbox">
        {Messages.map((message) => {
          if (!message.is_User_Msg)
            return (
              <p key={message.number} className="contacttext">
                {message.text}
              </p>
            );
          return (
            <p key={message.number} className="mytext">
              {message.text}
            </p>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div>
        <form className="chatinput" onSubmit={handleMessageSend}>
          <input
            type="text"
            className="writemsg"
            placeholder="Write a message"
            value={typingMsg}
            onChange={handleMsgInput}
          />
          <button type="submit" className="sendmsg">
            <img src="/Sendmsg.svg" alt="SendMsg" />
          </button>
        </form>
      </div>
    </div>
  );
}

const handleMsgInput = (e) => {
  store.dispatch(typingNewMessage(e.target.value));
};

const handleMessageSend = (e) => {
  e.preventDefault();
  if (store.getState().message.trim() != "")
    store.dispatch(
      sendNewMessage(store.getState().message, store.getState().activeUserId)
    );
  store.dispatch(typingNewMessage(""));
};

const mapStateToProps = (state) => {
  let typingMsg = state.message;
  let messages = state.messages;
  return {
    typingMsg,
    messages,
  };
};

export default connect(mapStateToProps)(Chatwindow);
