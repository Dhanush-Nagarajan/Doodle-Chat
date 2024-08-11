import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSocketContext } from '../context/SocketContext';
import { setMessages } from '../redux/actions';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const dispatch = useDispatch();
  const messages = useSelector(state => state.conversation.messages);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    };

    socket?.on('newMessage', handleNewMessage);

    return () => {
      socket?.off('newMessage', handleNewMessage);
    };
  }, [socket, dispatch, messages]);

};

export default useListenMessages;
