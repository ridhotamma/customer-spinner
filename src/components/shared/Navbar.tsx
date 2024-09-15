interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
  <nav className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
    <button onClick={toggleSidebar} className="text-white focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
    <h1 className='text-2xl font-semibold'>Your Brand</h1>
  </nav>
);

export default Navbar;
