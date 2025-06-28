import React from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { Home, Users, Phone,ClipboardList } from 'lucide-react';
import { use } from 'react';
import { useAuth } from '../../store/auth';

const AdminLayout = () => {
  const {user,isLoading} =useAuth();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded transition-colors duration-200 hover:bg-blue-200 
     ${isActive ? 'bg-blue-500 text-white' : 'text-gray-800'}`;
if(isLoading){
  return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
}
     if(!user || !user.isAdmin) {
      return   <Navigate to="/"/>
  
    }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r p-4 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink to="/" className={linkClass}>
            <Home size={18} /> Home
          </NavLink>
          <NavLink to="/admin/users" className={linkClass}>
            <Users size={18} /> Users
          </NavLink>
          <NavLink to="/admin/contacts" className={linkClass}>
            <Phone size={18} /> Contacts
          </NavLink>
         
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
