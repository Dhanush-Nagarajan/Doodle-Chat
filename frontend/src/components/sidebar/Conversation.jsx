import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx}) => {
  useConversation()
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-black">{conversation.fullName}</p>
          
        </div>
      
      </div>
    </div>
    
    <div className="divider py-0 my-0 h-0"></div>
    </> 
  )
}

export default Conversation;



