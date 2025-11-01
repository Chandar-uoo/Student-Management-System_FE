import React, { useEffect } from "react";
import { StudentCard } from "../components/StudentCard";
import { Chart } from "../components/Chart";
import { NavBar } from "../components/NavBar";
import useDashBoardHooks from "../hooks/useDashBoardHooks";
import { useRefresh } from "../hooks/useRefresh";
export const DashBoard = () => {
  const {
    students,
    yearData,
    setSearchTerm,
    searchTerm,
    yearDataHandler,
    handleDelete,
    handleEdit,
    handleView,
    fetchStudentData,
    handleLogout,
    onSearch,
  } = useDashBoardHooks();
  const { refresh,cleanUpRefresh } = useRefresh();
  useEffect(() => {
    fetchStudentData();
    yearDataHandler();
    cleanUpRefresh()
  }, [refresh]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Student Management Dashboard
            </h1>
          </div>

          {/* NavBar */}
          <NavBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}
            handleLogout={handleLogout}
          />
        </div>
      </div>

      {/* Student Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <StudentCard
          students={students}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onVeiw={handleView}
        />
      </div>

      {/* Bar Chart */}
      <Chart yearData={yearData} />
    </div>
  );
};

export default DashBoard;
