import React from "react";
import { Search, Plus, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ searchTerm, setSearchTerm, onSearch, handleLogout }) => {
  const nav = useNavigate();

  // Trigger search when pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Search Section */}
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by name, class, or roll number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full pl-12 pr-24 py-3 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     transition-all text-gray-800"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 
                     bg-blue-500 hover:bg-blue-600 active:scale-95 
                     text-white px-4 py-2 rounded-md 
                     transition-all duration-150 cursor-pointer shadow-sm"
        >
          Search
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={() => nav("/student-form")}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg 
                     hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
        >
          <Plus size={18} />
          Add Student
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gray-600 text-white px-5 py-2.5 rounded-lg 
                     hover:bg-gray-700 transition-colors shadow-sm active:scale-95"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};
