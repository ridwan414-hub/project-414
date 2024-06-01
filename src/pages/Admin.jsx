import { Outlet } from 'react-router-dom';
import Sidebar from '../components/AdminPage/Sidebar';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
