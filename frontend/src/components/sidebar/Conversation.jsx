import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx}) => {
  const {selectedConversation,setSelectedConversation} = useConversation()
  
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-yellow-100" : ''}
      `}
      onClick={() => setSelectedConversation(conversation)}
      >
      <div className="avatar online">
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
    
    {!lastIdx && <div className="divider py-0 my-0 h-0"></div>}
    </> 
  )
}

export default Conversation;



