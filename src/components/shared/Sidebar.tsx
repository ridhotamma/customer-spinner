import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => (
  <div
    className={`transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } bg-gray-700 text-white fixed top-0 left-0 h-full w-64 transition-transform duration-300 z-20`}
  >
    <div className='flex justify-between items-center p-4'>
      <h2 className='text-xl font-semibold'>Your Brand</h2>
      <button
        onClick={toggleSidebar}
        className='text-white hover:bg-gray-600 w-8 h-8 flex justify-center items-center rounded-full'
      >
        ✕
      </button>
    </div>
    <ul className='pt-6 space-y-4'>
      <li>
        <Link
          to='/'
          className='block px-4 py-2 hover:bg-gray-600'
          onClick={toggleSidebar}
        >
          Spinner
        </Link>
      </li>
      <li>
        <Link
          to='/customer'
          className='block px-4 py-2 hover:bg-gray-600'
          onClick={toggleSidebar}
        >
          Customer List
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
