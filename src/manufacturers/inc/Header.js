import { useState } from "react";
import { Link } from "react-router-dom";


// React icons used in header of manufacturers dashboard
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
// import { IoSettingsSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header = ({ isOpen, toggleSidebar, isAuth }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
  return (
    // Manufacturer Header start
    <header className={`fixed bg-gray-100 shadow-md text-gray-900 p-4 transition-transform transform ${isOpen? 'absolute w-calc-(100%-288px)' :'absolute w-calc-(100%-80px)'} transition-all ease-in-out duration-300`}>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 items-center">
            <button onClick={toggleSidebar} className="text-blue-600">
              {!isOpen ? <IoMenuSharp /> :<RxCross2 />}
            </button>
        </div>
        
        <div className="flex items-center space-x-4">
          
          <span className="text-lg">Username</span>
          <IoIosArrowDown className={`flex items-center text-2xl text-gray-500`} onClick={toggleDropdown}/>
          {isDropdownOpen && (
            <div className="absolute text-base mt-2 w-32 top-16 right-1 bg-white shadow-sm text-gray-800 border border-gray-300 rounded-md transition-all duration-300">
              <Link to={"/profile"} className="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100"><FaInfoCircle /> Profile</Link>
              <Link className="flex items-center gap-x-2 px-4 py-2 underline-none hover:bg-gray-100"><MdLogout /> Logout</Link>
            </div>
          )}
        </div>
          
      </div>
    </header>
  );
};

export default Header;


