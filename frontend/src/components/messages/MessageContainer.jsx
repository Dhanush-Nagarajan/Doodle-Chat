import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedConversation } from '../../redux/actions';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { IoLogoWechat } from 'react-icons/io5';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const dispatch = useDispatch();
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);

  useEffect(() => {
    return () => dispatch(setSelectedConversation(null));
  }, [dispatch]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text text-black font-bold">To : </span>
            <span className="text-black font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p className="text-black">Welcome {authUser.fullName}!!! 👋 </p>
        <p className="text-black">Select a chat to start messaging</p>
        <IoLogoWechat className='text-7xl text-black md:text-9xl mt-10 text-center' />
      </div>
    </div>
  );
};

export default MessageContainer;
