import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages.js"

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:",messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && 
      messages.length > 0 && 
      messages.map((message => (
        < Message key={message._id} message = {message}/>
      )))}
      {!loading && messages.length === 0 &&(
        <p className='text-center text-black'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages
