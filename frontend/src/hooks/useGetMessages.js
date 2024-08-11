import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../redux/actions';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedConversation = useSelector(state => state.conversation.selectedConversation);
  const messages = useSelector(state => state.conversation.messages);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, dispatch]);

  return { messages, loading };
};

export default useGetMessages;
