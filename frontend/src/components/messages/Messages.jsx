import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages()
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

{!loading && messages.length === 0 && (
<<<<<<< HEAD
      <p className='text-center text-black'>Send a message to start the conversation</p>
    )}
=======
				<p className='text-center text-black'>Send a message to start the conversation</p>
			)}
>>>>>>> fcb730b88af0fde729cd34ea7ac18f8263d269ce
		</div>
	);
};
export default Messages;