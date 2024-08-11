import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSocketContext } from '../../context/SocketContext';
import { setSelectedConversation } from '../../redux/actions';

const Conversation = ({ conversation, lastIdx }) => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-yellow-100" : ''}`}
        onClick={() => dispatch(setSelectedConversation(conversation))}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user-avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-black">{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider py-0 my-1 h-0"></div>}
    </>
  );
};

export default Conversation;
