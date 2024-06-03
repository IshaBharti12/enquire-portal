import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import useLogoutAdmin from "../hooks/useLogoutAdmin";

const AdminHeader = () => {
  const { logoutAdmin } = useLogoutAdmin();
  function handleLogout() {
    logoutAdmin();
  }

  return (
    <header className="bg-gray-800 text-white  w-full top-0 left-0 flex items-center justify-between sticky z-50">
      <h2 className="text-orange-500 text-[35px] font-serif px-2">
        <img src="/upflairs white logo.png" alt="" className="w-[20%] h-auto" />
      </h2>
      <nav className="flex flex-1 justify-center space-x-8 mr-[10%]">
        <NavLink to="/admin" className="hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/admin/active" className="hover:text-gray-300">
          Active
        </NavLink>
        <NavLink to="/admin/solved" className="hover:text-gray-300">
          Solved
        </NavLink>
        <button onClick={handleLogout}>
          <IoLogOutOutline className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
};

export default AdminHeader;
