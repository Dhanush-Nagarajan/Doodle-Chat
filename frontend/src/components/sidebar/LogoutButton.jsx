import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";


const LogoutButton = () => {
  const {loading,logout} = useLogout()
  return (
    <div className="mt-auto text-white">
      <button >
      {!loading?(<RiLogoutBoxLine className="bg-gray-500 h-8 w-8 p-1 rounded-lg cursor-pointer "
      onClick={logout}/>  ):(
        <span className="loading loading-spinner"></span>
      )} 
      </button>
    </div>
  )
}

export default LogoutButton;
