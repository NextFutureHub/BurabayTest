import React, { useState } from "react";
import logo from '../assets/logo.png';
import Header from './Header.tsx';
import { AlertCircle, Users, MessageSquare, BarChart, LogOut } from "lucide-react";

const SideNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [notifications, setNotifications] = useState<{ [key: number]: boolean }>({
    0: true,
    1: false,
    2: true,
    3: false,
  });

  const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);

  const links = [
    { icon: AlertCircle, label: "Жалобы", component: <Header /> }, // Replace with actual components
    { icon: Users, label: "Пользователи", component: '<UserList />' },
    { icon: MessageSquare, label: "Сообщения", component: '<Messages />' },
    { icon: BarChart, label: "Аналитика", component: "<Analytics /> "},
  ];

  const handleMenuClick = (index: number) => {
    setActiveIndex(index);
    setNotifications((prev) => ({ ...prev, [index]: false }));
    setActiveComponent(links[index].component); // Set the component based on the clicked link
  };

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-[#0A7D9E] 
        ${isExpanded ? "w-[312px] px-4 py-[33px]" : "w-[94px] px-4 py-[33px]"} 
        transition-all duration-300 ease-linear
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 justify-center">
        <div className="flex justify-center items-center w-[62px] h-[29px]">
          <img
            src={logo}
            alt="Logo"
          />
        </div>
        {isExpanded && <span className="text-white text-lg font-semibold">MyApp</span>}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 mt-8">
        {links.map((link, index) => (
          <div
            key={index}
            onClick={() => handleMenuClick(index)}
            className={`
              flex items-center py-[12px] px-[16px] 
              cursor-pointer relative
              ${activeIndex === index ? "bg-white text-[#0A7D9E]" : "text-white hover:border-white"} 
              border-[1.05px] border-transparent hover:border-white
              rounded-[8px] transition-all duration-300 ease-linear
              ${!isExpanded ? "justify-center" : ""} 
            `}
          >
            <link.icon size={30} />
            {isExpanded && <span className="text-md font-medium ml-2">{link.label}</span>}
            {notifications[index] && (
              <span className="absolute top-2 right-2 w-[6px] h-[6px] bg-red-600 rounded-full"></span>
            )}
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-4 w-full">
        <div className="flex items-center gap-4 px-4 py-[33px] text-white hover:border-white border-[1.05px] border-transparent hover:border-white rounded-[8px] cursor-pointer">
          <LogOut size={30} />
          {isExpanded && <span className="text-md font-medium">Log Out</span>}
        </div>
      </div>

      {/* Active Component Placeholder */}
      <div className="absolute top-0 right-0 h-full w-[calc(100%-312px)] bg-gray-100">
        {activeComponent ? (
          <div className="p-4">
            {activeComponent}
          </div>
        ) : (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Выберите раздел</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
