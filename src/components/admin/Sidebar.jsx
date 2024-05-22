import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: false },
    { title: 'Control-Events ', src: 'Calendar' },
    { title: 'Manage-Info', src: 'Search' },
    { title: 'Donation', src: 'Chart' },
    { title: 'Committee ', src: 'Folder', gap: false },
    { title: 'Setting', src: 'Setting' },
    { title: 'Blog', src: 'Blog' },
    { title: 'Logout', src: 'Logout', gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/admin-sidebar-images/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/admin-sidebar-images/logo.png"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Admin Panel
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'm-10 mt-24' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
                <img
                  src={`./src/assets/admin-sidebar-images/${Menu.src}.png`}
                />
              <NavLink to={Menu.title}>
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
