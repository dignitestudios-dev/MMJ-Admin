import { AiOutlinePoweroff } from "react-icons/ai";
import Cookies from 'js-cookie';
import { logout } from '../../utils/authActions';

const Topbar = () => {
  const username = Cookies.get('name');
  return (
    <nav className='w-full py-5 px-10 border-b flex justify-between capitalize shadow'>
      <h4 className='text-gray-600 text-2xl font-medium italic'>Welcome <span className=''>{username}! </span></h4>
      <button className='flex items-center text-xl font-medium text-gray-600 gap-2' onClick={logout}>
        <AiOutlinePoweroff />
        Logout
      </button>
    </nav>
  )
}

export default Topbar