import React, { useState, ReactNode } from 'react';
import Sidebar from '../components/shared/Sidebar';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex flex-col min-h-screen relative'>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className='flex flex-1'>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-grow p-6 transition-all duration-300 ${
            sidebarOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          {children}
        </div>
      </div>
      <Footer />
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className='fixed inset-0 bg-black opacity-50 z-10'
        ></div>
      )}
    </div>
  );
};

export default MainLayout;
