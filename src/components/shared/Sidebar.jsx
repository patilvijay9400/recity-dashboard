import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigationLinks = [
    { path: '/', label: 'Dashboard' },
    {
      path: '/inventory',
      label: 'Inventory',
      subMenu: [
        { path: '/inventory/inward', label: 'Inward' },
        { path: '/inventory/outward', label: 'Outward' }
      ]
    },
    {
      path: '/stakeholders',
      label: 'Stakeholders',
      subMenu: [
        { path: '/stakeholders/vendors', label: 'Vendors' },
        { path: '/stakeholders/customers', label: 'Customers' }
      ]
    },
    { path: '/processes', label: 'Processes' },
    { path: '/materials', label: 'Materials' },
    { path: '/vehicles', label: 'Vehicles' },
    {
      path: '/staff',
      label: 'Staff',
      subMenu: [
        { path: '/staff/staff', label: 'Staff' },
        { path: '/staff/attendance', label: 'Attendance' }
      ]
    },
    {
      path: '/finances',
      label: 'Finances',
      subMenu: [
        { path: '/finances/expenses', label: 'Expenses' },
        { path: '/finances/revenue', label: 'Revenue' }
      ]
    },
    { path: '/reports-analytics', label: 'Reports/Analytics' },
    { path: '/settings', label: 'Settings' },
    { path: '/support', label: 'Support' }
  ];
  
    const handleSubMenuToggle = (path) => {
      setOpenSubMenu(openSubMenu === path ? null : path);
    };
  
    const closeSubMenu = () => {
      setOpenSubMenu(null);
  };
  
    return (
      <nav className="bg-gray-700 text-white py-4 flex flex-col w-48">
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.path} className="mb-2">
              {link.subMenu ? (
                <div className="relative">
                  <span
                    className={`cursor-pointer text-gray-400 hover:text-white flex justify-between items-center w-full py-2 px-3 rounded-xl ${openSubMenu === link.path ? "bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium" : ""}`}
                    onClick={() => handleSubMenuToggle(link.path)}
                  >
                    <span>{link.label}</span>
                    <span><BiChevronDown /></span>
                  </span>
                  {openSubMenu === link.path && (
                    <ul className="submenu pt-2">
                      {link.subMenu.map(subLink => (
                        <li key={subLink.path}>
                          <NavLink
                            to={subLink.path}
                            className="block text-sm text-gray-400 hover:text-white w-full py-2 px-4 rounded-xl"
                          >
                            {subLink.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-white single-menu w-full py-2 px-3 flex rounded-xl"
                  onClick={closeSubMenu}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Sidebar;
  
