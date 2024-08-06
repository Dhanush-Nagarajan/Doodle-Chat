import { useState } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
    const [message, setMessage]=useState('');
    const {loading,sendMessage}=useSendMessage(); 

    const handleSubmit= async (e)=>{
      e.preventDefault();
      if(!message ) return;
      await sendMessage(message);
      setMessage("");
    }

  return (
    <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
      <div className="w-full">
        <input 
          type="text" 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
          placeholder="Send a message" 
          value={message}
					onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="text-white absolute inset-y-0 right-0 flex items-center pr-8 cursor-pointer">
          {loading? <div className="loading loading-spinner"></div>:<BiSend/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput;
