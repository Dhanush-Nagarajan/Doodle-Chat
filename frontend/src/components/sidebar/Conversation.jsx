
const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-gray-300 rounded p-2 py-1 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-black">Monish</p>
          <span className="text-xl">😀</span>
        </div>
      
      </div>
    </div>
    
    <div className="divider py-0 my-0 h-0"></div>
    <hr />
    </> 
  )
}

export default Conversation;



