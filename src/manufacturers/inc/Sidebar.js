import React from 'react'
// import { FaAngleLeft } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
// import { FaChartPie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
// import { MdOutlineSchedule } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaFolder } from "react-icons/fa";
import { FaWineBottle } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaKeycdn } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ isOpen, toggleSidebar }) => {
    // const [open, setOpen] = useState(true);
    // const [selected, setSelected] = useState(true);

    const Menus = [
        {title: "Dashboard", link: "/dashboard", icon: <MdDashboard />},
        {title: "Generate QrCode",link: "/generate-qrcode", icon: <FaUser />},
        {title: "ViewQrCode",link: "/qrcodes", icon: <BsQrCode />, dropdown: true},
        {title: "View Fake Products",link: "/", icon: <FaKeycdn />},
    ]

  return (
    <div className='flex'>

        <div className={`inset-y-0 left-0 ${isOpen?"w-72":"w-20"} text-lg font-semibold h-screen  duration-300 pt-8 bg-blue-600`}>
            <div className="flex items-center border-b-2 border-b-gray-300 pb-3 border-opacity-35">
                <span><FaWineBottle className={`cursor-pointer mx-5 duration-500 text-4xl text-purple-800`}/></span>
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!isOpen && "scale-0"}`}>Alco-Shield</h1>
            </div>
            <ul className="pt-6 mr-0">
                {Menus.map((menu, index) => (
                    <li className={`text-gray-300 text-md flex items-center gap-x-4 hover:font-semibold hover:text-purple-800
                    cursor-pointer p-5 py-3 hover:bg-light-white rounded-md ${menu.gap?"mt-9":"mt-2"}`} key={index}> 
                        
                        <NavLink to={`${menu.link}`} className={` flex gap-x-4 items-center text-white hover:text-purple-800 hover:font-semibold origin-left duration-300`}>
                        <span className="text-2xl ">{menu.icon}</span><span className={`${!isOpen && 'hidden'}`}>{menu.title}</span></NavLink> 
                        {menu.dropdown? 
                                <div className={`${!isOpen?"":"pl-20"}`}>
                                    <IoIosArrowForward />
                                </div>
                            : ""}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    
  )
}

export default Sidebar;