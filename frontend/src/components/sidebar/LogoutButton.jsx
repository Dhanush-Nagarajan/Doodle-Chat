import { RiLogoutBoxLine } from "react-icons/ri";


const LogoutButton = () => {
  return (
    <div className="mt-auto text-white cursor-pointer">
      <button >
      <RiLogoutBoxLine className="bg-gray-500 h-8 w-8 p-1 rounded-lg "/>   
      </button>
    </div>
  )
}

export default LogoutButton;
